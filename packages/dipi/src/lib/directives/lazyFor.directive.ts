import {
  Input, Directive, ViewContainerRef,
  OnInit, TemplateRef, DoCheck,
  IterableDiffers, IterableDiffer
} from '@angular/core';

@Directive({
  selector: '[lazyFor]'
})
export class LazyForDirective implements DoCheck, OnInit {

  @Input() lazyForContainer: HTMLElement;

  itemHeight: number;
  itemTagName: string;

  @Input()
  set lazyForOf(list: any) {
    this.list = list;

    if (list) {
      this.differ = this.iterableDiffers.find(list).create();

      if (this.initialized) {
        this.update();
      }
    }
  }

  private templateElem: HTMLElement;

  private beforeListElem: HTMLElement;
  private afterListElem: HTMLElement;

  private list: any[] = [];

  private initialized = false;
  private firstUpdate = true;

  private differ: IterableDiffer<any>;

  private lastChangeTriggeredByScroll = false;

  constructor(private vcr: ViewContainerRef,
              private tpl: TemplateRef<any>,
              private iterableDiffers: IterableDiffers) { }

  ngOnInit() {
    this.templateElem = this.vcr.element.nativeElement;

    if (this.lazyForContainer === undefined) {
      this.lazyForContainer = this.templateElem.parentElement;
    }

    //Adding an event listener will trigger ngDoCheck whenever the event fires so we don't actually need to call
    //update here.
    this.lazyForContainer.addEventListener('scroll', () => {
      this.lastChangeTriggeredByScroll = true;
    });

    this.initialized = true;
  }

  ngDoCheck() {
    if (this.differ && Array.isArray(this.list)) {

      if (this.lastChangeTriggeredByScroll) {
        this.update();
        this.lastChangeTriggeredByScroll = false;
      } else {
        const changes = this.differ.diff(this.list);

        if (changes !== null) {
          this.update();
        }
      }
    }
  }

  //Preconditions:
  //  this.list is an array
  private update() {

    //Can't run the first update unless there is an element in the list
    if (this.list.length === 0) {
      this.vcr.clear();
      if (!this.firstUpdate) {
        this.beforeListElem.style.height = '0';
        this.afterListElem.style.height = '0';
      }
      return;
    }

    if (this.firstUpdate) {
      this.onFirstUpdate();
    }

    const listHeight = this.lazyForContainer.style.height.includes('px')
      ? parseInt(this.lazyForContainer.style.height, 10) : this.lazyForContainer.clientHeight;
    const scrollTop = this.lazyForContainer.scrollTop;

    //The height of anything inside the container but above the lazyFor content;
    const fixedHeaderHeight =
      (this.beforeListElem.getBoundingClientRect().top - this.beforeListElem.scrollTop) -
      (this.lazyForContainer.getBoundingClientRect().top - this.lazyForContainer.scrollTop);

    //This needs to run after the scrollTop is retrieved.
    this.vcr.clear();

    let listStartI = Math.floor((scrollTop - fixedHeaderHeight) / this.itemHeight);
    listStartI = this.limitToRange(listStartI, 0, this.list.length);

    let listEndI = Math.ceil((scrollTop - fixedHeaderHeight + listHeight) / this.itemHeight);
    listEndI = this.limitToRange(listEndI, -1, this.list.length - 1);

    for (let i = listStartI; i <= listEndI; i++) {
      this.vcr.createEmbeddedView(this.tpl, {
        $implicit: this.list[i],
        index: i
      });
    }

    this.beforeListElem.style.height = `${listStartI * this.itemHeight}px`;
    this.afterListElem.style.height = `${(this.list.length - listEndI - 1) * this.itemHeight}px`;
  }

  private onFirstUpdate() {

    let sampleItemElem: HTMLElement;
    if (this.itemHeight === undefined || this.itemTagName === undefined) {
      this.vcr.createEmbeddedView(this.tpl, {
        $implicit: this.list[0],
        index: 0
      });
      sampleItemElem = <HTMLElement>this.templateElem.nextSibling;
    }

    if (this.itemHeight === undefined) {
      // this.itemHeight = sampleItemElem.clientHeight;
      this.itemHeight = parseInt(window.getComputedStyle(sampleItemElem).minHeight, 10);

    }

    if (this.itemTagName === undefined) {
      this.itemTagName = sampleItemElem.tagName;
    }

    this.beforeListElem = document.createElement(this.itemTagName);
    this.templateElem.parentElement.insertBefore(this.beforeListElem, this.templateElem);

    this.afterListElem = document.createElement(this.itemTagName);
    //This inserts after the templateElem. see http://stackoverflow.com/a/4793630/373655 for details
    this.templateElem.parentElement.insertBefore(this.afterListElem, this.templateElem.nextSibling);

    if (this.itemTagName.toLowerCase() === 'li') {
      this.beforeListElem.style.listStyleType = 'none';
      this.afterListElem.style.listStyleType = 'none';
    }

    this.firstUpdate = false;
  }

  private limitToRange(num: number, min: number, max: number) {
    return Math.max(
      Math.min(num, max),
      min
    );
  }
}

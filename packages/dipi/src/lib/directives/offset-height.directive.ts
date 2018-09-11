import { AfterViewChecked, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[offsetHeight]'
})
export class OffsetHeightDirective implements AfterViewChecked {

  @Input() bottomOffset = 0;

  private cachedOffsetTop = 0;

  constructor(private el: ElementRef) {}

  ngAfterViewChecked() {
    this.adjust();
  }

  private adjust(): void {
    if (this.cachedOffsetTop !== this.el.nativeElement.offsetTop) {
      this.cachedOffsetTop = this.el.nativeElement.offsetTop;
      this.el.nativeElement.style.height = `calc(100vh - ${this.el.nativeElement.offsetTop + this.bottomOffset}px)`;
    }
  }
}

import { Directive, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Directive({
  selector: '[ngModel][debounce]',
})
export class DebounceDirective implements OnInit {

  @Output() debouceEvent = new EventEmitter<any>();

  @Input() debounce = 500;

  private isFirstChange = true;

  constructor(public model: NgControl) {}

  ngOnInit() {
    this.model.valueChanges
      .pipe(
        debounceTime(this.debounce),
        distinctUntilChanged()
      )
      .subscribe(modelValue => {
        if (this.isFirstChange) {
          this.isFirstChange = false;
        } else {
          this.debouceEvent.emit(modelValue);
        }
      });
  }
}

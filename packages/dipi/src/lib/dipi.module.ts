import { NgModule } from '@angular/core';

/**
 * Pipes
 */
import { JoinPipe } from './pipes/join.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SafePipe } from './pipes/safe.pipe';

/**
 * Directives
 */
import { LazyForDirective } from './directives/lazyFor.directive';
import { DebounceDirective } from './directives/debounse.directive';
import { OffsetHeightDirective } from './directives/offset-height.directive';

@NgModule({
  imports: [],
  declarations: [
    JoinPipe, FilterPipe, SafePipe,
    LazyForDirective, DebounceDirective, OffsetHeightDirective
  ],
  exports: [
    JoinPipe, FilterPipe, SafePipe,
    LazyForDirective, DebounceDirective, OffsetHeightDirective
  ]
})
export class DipiModule { }

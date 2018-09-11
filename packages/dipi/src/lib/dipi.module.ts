import { NgModule } from '@angular/core';

/**
 * Pipes
 */
import { JoinPipe } from './pipes/join.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

/**
 * Directives
 */
import { LazyForDirective } from './directives/lazyFor.directive';
import { DebounceDirective } from './directives/debounse.directive';
import { OffsetHeightDirective } from './directives/offset-height.directive';

@NgModule({
  imports: [],
  declarations: [
    JoinPipe, FilterPipe, SafePipe, SearchFilterPipe,
    LazyForDirective, DebounceDirective, OffsetHeightDirective
  ],
  exports: [
    JoinPipe, FilterPipe, SafePipe, SearchFilterPipe,
    LazyForDirective, DebounceDirective, OffsetHeightDirective
  ]
})
export class DipiModule { }

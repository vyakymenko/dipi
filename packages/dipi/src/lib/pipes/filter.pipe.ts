import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /**
   * values {any[]} - Array of values with filter property, by default it's `available`.
   * criteria {string} - Property name for filtering.
   */
  transform(values: any[], criteria: string | undefined): any[] {
    return values.filter(e => criteria !== undefined
      ? e.hasOwnProperty(criteria) ? e[criteria] : false
      : e.available);
  }
}

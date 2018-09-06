import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], criteria: boolean | undefined): any[] {
    return values.filter(e => criteria !== undefined
      ? criteria
      : !e.available);
  }
}

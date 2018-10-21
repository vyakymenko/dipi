import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], criteria: any): any {

    return items.filter((item: any) => {

      switch (typeof item) {
        case 'number':
          return typeof criteria === 'number' ? item === criteria : false;
        case 'string':
          return item.includes(criteria);
        case 'object':
          return JSON.stringify(item).includes(criteria.toString());
        default:
          return false;
      }
    });
  }
}

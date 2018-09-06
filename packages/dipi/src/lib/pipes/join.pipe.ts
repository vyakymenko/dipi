import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  pure: false
})
export class JoinPipe implements PipeTransform {

  // /**
  //  * @param {string[]} values - Array of string values.
  //  * @param {string} delimiter - String values delimiter. Default `, `.
  //  *
  //  * @returns {string}
  //  */
  transform(values: string[], delimiter?: string): string {
    return values.join(typeof delimiter === 'string' ? delimiter : ', ');
  }
}

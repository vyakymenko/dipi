import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  pure: false
})
export class JoinPipe implements PipeTransform {

  /**
   * values - Array of string values.
   * delimiter - String values delimiter. Default `, `.
   */
  transform(values: string[], delimiter?: string): string {
    return values.join(typeof delimiter === 'string' ? delimiter : ', ');
  }
}

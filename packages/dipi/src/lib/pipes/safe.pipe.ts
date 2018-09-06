import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

type ContentType = 'html' | 'css' | 'js' | 'url' | 'res-url';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: {} | string | null, type: ContentType): string | null {

    switch (type) {

    }

    // return this.sanitizer.sanitize(type, value);
  }
}

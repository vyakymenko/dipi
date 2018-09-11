import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';

import { ContentType } from '../types/content.type';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, type: ContentType): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {

    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'css':
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'js':
        return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'res-url':
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
  }
}

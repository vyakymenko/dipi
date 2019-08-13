[![npm version](https://badge.fury.io/js/dipi.svg)](https://badge.fury.io/js/dipi)
[![Build Status](https://travis-ci.org/vyakymenko/dipi.svg?branch=master)](https://travis-ci.org/vyakymenko/dipi)
[![CircleCI](https://circleci.com/gh/vyakymenko/dipi.svg?style=svg)](https://circleci.com/gh/vyakymenko/dipi)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Greenkeeper badge](https://badges.greenkeeper.io/vyakymenko/dipi.svg)](https://greenkeeper.io/)

# Dipi

A simple Angular library that contain a huge, useful pack of Directives and Pipes for Angular developers.

## Quick Start

1. Install `Dipi` library:
```sh
$ npm i dipi -D
```

2. Import `DipiModule` inside your Angular module:
```ts
....
import { DipiModule } from 'dipi';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DipiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Documentation

Website documentation is in development.

### Pipes
___

#### join `| join`

<details>
  <summary>Example</summary>
  <p>

  #### Default value
  
  ```html
    <p>{{ textList | join }}</p> <!-- Dipi,is,working! -->
  ```
  
  #### Custom value
  
  ```html
      <p>{{ textList | join: ' ' }}</p> <!-- Dipi is working! -->
  ```
  
  [Stackblitz](https://stackblitz.com/edit/dipi-pipe-join)
  
  </p>
</details>

#### safe `| safe`
<details>
  <summary>Example</summary>
  <p>

  Default value: `url`. Possible values: `'html' | 'css' | 'js' | 'url' | 'res-url'`

  #### Default value
  
  ```html
    <iframe [src]="'https://www.w3schools.com' | safe"></iframe>
  ```
  
  #### Custom value
  
  ```html
    <p [style]="'color: red' | safe: 'style'">Red text</p>
  ```
  
  [Stackblitz](https://stackblitz.com/edit/dipi-seed-safe)
  
  </p>
</details>

#### filter `| filter`
<details>
  <summary>Example</summary>
  <p>

  #### Default value
    
  ```ts
    textList = [
      {
        name: 'Dipi',
        available: true,
      },{
        name: 'is',
        available: true,
      },{
        name: 'working!',
        available: true,
      },{
        name: 'Hide me',
        available: false
      }
    ]
  ```
  
  ```html
    <p>
      <ng-container *ngFor="let node of textList | filter">
        <span>{{ node.name }} </span>
      </ng-container>
    </p>
  ```
  
  #### Custom value
  
  ```html
    <p>
      <ng-container *ngFor="let node of textList | filter : 'name'">
        <span>{{ node.name }} </span>
      </ng-container>
    </p>
  ```
  
  [Stackblitz](https://stackblitz.com/edit/dipi-seed-filter)
  
  </p>
</details>

#### searchFilter `| searchFilter`
<details>
  <summary>Example</summary>
  <p>
    
  ```ts
    search = 'Dipi';
  
    textList = [
      {
        name: 'Dipi',
        available: true,
      },{
        name: 'is',
        available: true,
      },{
        name: 'working!',
        available: true,
      },{
        name: 'Hide me',
        available: false
      }
    ]
  ```
  
  ```html
    <p>
      <ng-container *ngFor="let node of textList | searchFilter: search">
        <span>{{ node.name }} </span>
      </ng-container>
    </p>
  ```
  
  [Stackblitz](https://stackblitz.com/edit/dipi-seed-search-filter)
  
  </p>
</details>

### Directives
___

#### debounce `[debounce]`
<details>
  <summary>Example</summary>
  <p>
  
  `app.component.ts`
  
  ```ts
  import { Component } from '@angular/core';
  
  @Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
  })
  export class AppComponent  {
    name = 'Angular';
    search = '';
  
    textList = [
      {
        name: 'Dipi',
        available: true,
      },{
        name: 'is',
        available: true,
      },{
        name: 'working!',
        available: true,
      },{
        name: 'Hide me',
        available: false
      }
    ]
  
    filteredList: any[];
  
    constructor() {
      this.filteredList = this.textList;
    }
  
    filterSearch(): void {
      this.filteredList = this.textList.filter((e: any) => e.name.includes(this.search));
    }
  }
  ```

  #### Default value
  
  ```html
  <h2>Dipi Seed</h2>
  <input type="search"
         [debounce]
         [(ngModel)]="search"
         (debouceEvent)="filterSearch()">
  <p>
    <ng-container *ngFor="let node of filteredList">
      <span>
       {{ node.name }}
      </span>
    </ng-container>
  </p>
  ```
  
  #### Custom value
  
  ```html
  <h2>Dipi Seed</h2>
    <input type="search"
           [debounce]="2000"
           [(ngModel)]="search"
           (debouceEvent)="filterSearch()">
    <p>
      <ng-container *ngFor="let node of filteredList">
        <span>
         {{ node.name }}
        </span>
      </ng-container>
    </p>
  ```
  
  [Stackblitz](https://stackblitz.com/edit/dipi-seed-debounce)
  
  </p>
</details>

#### lazyFor `*lazyFor`
<details>
  <summary>Example</summary>
  <p>
  
  List of items
  ```ts
    textList = [
      {
        name: 'Dipi',
        available: true,
      },{
        name: 'is',
        available: true,
      },{
        name: 'working!',
        available: true,
      },{
        name: 'Hide me',
        available: false
      },{
        name: 'Foo',
        available: false
      },{
        name: 'Bar',
        available: false
      },{
        name: 'Buz',
        available: false
      }
    ]
  ```
  Component css
  ```css
    ul {
      height: 100px;
      overflow-y: auto;
    }
    
    ul li {
      min-height: 35px;
    }
  ```
  
  Directive usage
  ```html
    <ul>
      <li *lazyFor="let k of textList">
        {{ k.name }}
      </li>
    </ul>
  ```
  
  [Stackblitz](https://stackblitz.com/edit/dipi-seed-lazy-for)
  
  </p>
</details>

#### offsetHeight `offsetHeight`
<details>
  <summary>Example</summary>
  <p>
  
  ```html
   <h2>
    Dipi
   </h2>
   <div offsetHeight>
     Block
   </div>
  ```
  
  [Stackblitz](https://stackblitz.com/edit/dipi-seed-offset-height)
  
  </p>
</details>

## In Development

1. `Pipes:` `| distinct` `| formatter` `| timer`

2. `Directives:`

3. Website documentation

## Help

I will be so glad if you will create an issue with your own useful `Directive` or `Pipe` that will be used by other Angular developers  .
Knowledge sharing is our strength!

## Contributing

Please read [contributing guidelines here](./CONTRIBUTING.md).

## License

MIT

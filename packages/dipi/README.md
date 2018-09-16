The sources for this package are in the main [Dipi](https://github.com/vyakymenko/dipi) repo. Please file issues and pull requests against that repo.

### Pipes

#### join `| join`
<details>
  <summary>How to use</summary>
  <p>

  #### Default value
  
  ```angular2html
    <p>{{ textList | join }}</p> <!-- Dipi,is,working! -->
  ```
  
  #### Custom value
  
  ```angular2html
      <p>{{ textList | join: ' ' }}</p> <!-- Dipi is working! -->
  ```
  
  [Stackblitz](https://stackblitz.com/edit/dipi-pipe-join)
  
  </p>
</details>

#### safe `| safe`
<details>
  <summary>How to use</summary>
  <p>

  #### Default value
  
  ```angular2html
    <iframe [src]="'https://www.w3schools.com' | safe"></iframe>
  ```
  
  #### Custom value
  
  ```angular2html
    <p [style]="'color: red' | safe: 'style'">Red text</p>
  ```
  
  [Stackblitz](https://stackblitz.com/edit/dipi-seed-safe)
  
  </p>
</details>

#### filter `| filter`
<details>
  <summary>How to use</summary>
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
  
  ```angular2html
    <p>
      <ng-container *ngFor="let node of textList | filter">
        <span>{{ node.name }} </span>
      </ng-container>
    </p>
  ```
  
  #### Custom value
  
  ```angular2html
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
  <summary>How to use</summary>
  <p>

  #### Example
    
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
  
  ```angular2html
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

#### debounce `[debounce]`
<details>
  <summary>How to use</summary>
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
  
  ```angular2html
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
  
  ```angular2html
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
  <summary>How to use</summary>
  <p>

  #### Example
  
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
  ```angular2html
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
  <summary>How to use</summary>
  <p>

  #### Example
  
  ```angular2html
   <h2>
    Dipi Seed
   </h2>
   <div offsetHeight>
     Block
   </div>
  ```
  
  [Stackblitz](https://stackblitz.com/edit/dipi-seed-offset-height)
  
  </p>
</details>

License: MIT

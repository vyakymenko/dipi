# Dipi

Directives and Pipes Angular library that provide a huge pack of useful solutions for Angular developers.

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

#### Join `| join`
<details>
  <summary>How to use</summary>
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

### Directives

## Contributing

Please read [contributing guidelines here](./CONTRIBUTING.md).

## License

MIT

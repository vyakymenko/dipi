import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DipiModule } from 'dipi';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DipiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

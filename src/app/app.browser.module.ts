import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/browser'; // for AoT we need to manually split universal packages

import { SharedModule } from './shared/shared.module';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Cache } from './universal-cache';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    HomeModule,
    AboutModule,

    AppRoutingModule
  ],
  providers: [
    { provide: 'isBrowser', useValue: isBrowser },
    { provide: 'isNode', useValue: isNode },
    Cache
  ]
})
export class MainModule {
  constructor(public cache: Cache) {

  }
}

<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/browser'; // for AoT we need to manually split universal packages

import { SharedModule } from './shared/shared.module';
=======
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/browser'; // for AoT we need to manually split universal packages

import { Ng2GetHTMLModule } from 'ng2-gethtml/ng2-gethtml';
>>>>>>> 6989692d620116f8dfea8ee6c381b68657a47a40

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Cache } from './universal-cache';

<<<<<<< HEAD
=======

>>>>>>> 6989692d620116f8dfea8ee6c381b68657a47a40
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
<<<<<<< HEAD
    FormsModule,
    HttpModule,

    
=======
    Ng2GetHTMLModule.forRoot(),
    FormsModule,

>>>>>>> 6989692d620116f8dfea8ee6c381b68657a47a40
    HomeModule,
    AboutModule,

    AppRoutingModule
  ],
  providers: [
    { provide: 'isBrowser', useValue: isBrowser },
    { provide: 'isNode', useValue: isNode },
    Cache
<<<<<<< HEAD
  ]
=======
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
>>>>>>> 6989692d620116f8dfea8ee6c381b68657a47a40
})
export class MainModule {
  constructor(public cache: Cache) {

  }
}

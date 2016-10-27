import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/browser'; // for AoT we need to manually split universal packages

import { Ng2GetHTMLModule } from 'ng2-gethtml/ng2-gethtml';

import { App, Home, GetHTML } from './app/app';
import { Cache } from './app/universal-cache';

@NgModule({
  bootstrap: [ App ],
  declarations: [ App, Home, GetHTML ],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    Ng2GetHTMLModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: Home, pathMatch: 'full' }
    ])
  ],
  providers: [
    { provide: 'isBrowser', useValue: isBrowser },
    { provide: 'isNode', useValue: isNode },
    Cache
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule {
  constructor(public cache: Cache) {

  }
}

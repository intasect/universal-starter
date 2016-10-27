import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule, isBrowser, isNode } from 'angular2-universal/node'; // for AoT we need to manually split universal packages

import { Ng2GetHTMLModule } from 'ng2-gethtml/ng2-gethtml';

import { App, Home, GetHTML } from './app/app';
import { Cache } from './app/universal-cache';

@NgModule({
  bootstrap: [ App ],
  declarations: [ App, Home, GetHTML ],
  imports: [
    UniversalModule, // NodeModule, NodeHttpModule, and NodeJsonpModule are included
    FormsModule,
    Ng2GetHTMLModule.forRoot(),
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
  // we need to use the arrow function here to bind the context as this is a gotcha in Universal for now until it's fixed
  universalDoDehydrate = (universalCache) => {
    universalCache['Cache'] = JSON.stringify(this.cache.dehydrate());
  }
  universalAfterDehydrate = () => {
    this.cache.clear();
  }
}

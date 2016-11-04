import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    AboutRoutingModule,
    SharedModule
  ],
  declarations: [
    AboutComponent
  ],
  providers: [
  ]
})
export class AboutModule { }

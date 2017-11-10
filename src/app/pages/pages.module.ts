import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  imports: [ PagesRoutingModule ],
  declarations: [
    P404Component,
    P500Component,
    LandingPageComponent
  ]
})
export class PagesModule { }

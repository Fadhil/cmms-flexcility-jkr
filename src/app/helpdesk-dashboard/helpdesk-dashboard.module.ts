import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpdeskDashboardComponent } from './helpdesk-dashboard.component';
import {HelpdeskDashboardRoutingModule} from "./helpdesk-dashboard-routing.module";

@NgModule({
  imports: [

    HelpdeskDashboardRoutingModule,
    CommonModule
  ],
  declarations: [HelpdeskDashboardComponent]
})
export class HelpdeskDashboardModule { }

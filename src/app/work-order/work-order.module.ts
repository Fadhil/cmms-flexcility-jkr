import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderComponent } from './work-order.component';
import {WorkOrderRoutingModule} from "./work-order-routing.module";
import { WorkOrderExecutionComponent } from './work-order-execution/work-order-execution.component';
import { WorkOrderReportComponent } from './work-order-report/work-order-report.component';

@NgModule({
  imports: [
    WorkOrderRoutingModule
  ],
  declarations: [WorkOrderComponent, WorkOrderExecutionComponent, WorkOrderReportComponent]
})
export class WorkOrderModule { }

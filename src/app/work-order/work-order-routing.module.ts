/**
 * Created by fadhil on 12/05/2017.
 */
import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';

import { WorkOrderComponent } from './work-order.component';
import { WorkOrderExecutionComponent } from './work-order-execution/work-order-execution.component';
import { WorkOrderReportComponent } from './work-order-report/work-order-report.component';

const routes: Routes = [
  {
    path: '',
    component: WorkOrderComponent,
    data: {
      title: 'Work Order'
    }
  },
  {
    path: 'execution',
    component: WorkOrderExecutionComponent,
    data: {
      title: 'Work Order Execution'
    }
  },
  {
    path: 'report',
    component: WorkOrderReportComponent,
    data: {
      title: 'Work Order Report'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkOrderRoutingModule { }
/**
 * Created by fadhil on 12/05/2017.
 */

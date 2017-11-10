import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';

import { ServiceRequisitionComponent } from './service-requisition.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceRequisitionComponent,
    data: {
      title: 'Service Requisition'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRequisitionRoutingModule { }/**
 * Created by fadhil on 11/05/2017.
 */

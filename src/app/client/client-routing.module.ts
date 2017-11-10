import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientServiceRequisitionComponent } from './client-service-requisition/client-service-requisition.component';
import { ClientServiceRequisitionSummaryComponent } from './client-service-requisition-summary/client-service-requisition-summary.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Client Pages'
    },
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Client Home'
        }
      },
      {
        path: 'service-requisition',
        component: ClientServiceRequisitionComponent,
        data: {
          title: 'Client Service Requisition'
        }
      },
      {
        path: 'service-requisition-summary',
        component: ClientServiceRequisitionSummaryComponent,
        data: {
          title: 'Client Service Requisition Summary'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}

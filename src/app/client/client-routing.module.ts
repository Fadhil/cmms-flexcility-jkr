import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientServiceRequisitionComponent } from './client-service-requisition/client-service-requisition.component';
import { ClientServiceRequisitionSummaryComponent } from './client-service-requisition-summary/client-service-requisition-summary.component';
import { ClientWorkRequestComponent } from './client-work-request/client-work-request.component';
import { ClientWorkRequestViewComponent } from './client-work-request-view/client-work-request-view.component';
import { ClientWorkRequestRateComponent } from './client-work-request-rate/client-work-request-rate.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Home'
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
      },
      {
        path: 'workrequest',
        component: ClientWorkRequestComponent,
        data: {
          title: 'Work Request'
        },
        children: [
          {
            path: 'view',
            component: ClientWorkRequestViewComponent,
            data: {
              title: 'View'
            }
          },
          {
            path: 'rate',
            component: ClientWorkRequestRateComponent,
            data: {
              title: 'Rate'
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}

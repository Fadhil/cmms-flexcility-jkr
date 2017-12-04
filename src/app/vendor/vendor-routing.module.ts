import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorWorkOrderHomeComponent } from './vendor-work-order-home/vendor-work-order-home.component';
import { VendorWorkOrderViewComponent } from './vendor-work-order-view/vendor-work-order-view.component';
import { VendorWorkOrderCompletionComponent } from './vendor-work-order-completion/vendor-work-order-completion.component';
import { VendorWorkRequestHomeComponent } from './vendor-work-request-home/vendor-work-request-home.component';
import { VendorWorkRequestViewComponent } from './vendor-work-request-view/vendor-work-request-view.component';
import { VendorWorkRequestQuotationComponent } from './vendor-work-request-quotation/vendor-work-request-quotation.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: 'dashboard',
        component: VendorDashboardComponent,
        data: {
          title: 'dashboard'
        }
      },
      {
        path: 'workorder',
        component: VendorWorkOrderHomeComponent,
        data: {
        title: 'Work Order'
        },
        children: [

        {
          path: 'view',
          component: VendorWorkOrderViewComponent,
          data: {
            title: 'View'
          }
        },
        {
          path: 'completion',
          component: VendorWorkOrderCompletionComponent,
          data: {
            title: 'Completion'
          }
        }

        ]
      },
      {
        path: 'workrequest',
        component: VendorWorkRequestHomeComponent,
        data: {
        title: 'Work Request'
        },
        children: [

        {
          path: 'view',
          component: VendorWorkRequestViewComponent,
          data: {
            title: 'View'
          }
        },
        {
          path: 'quotation',
          component: VendorWorkRequestQuotationComponent,
          data: {
            title: 'Completion'
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
export class VendorRoutingModule {}

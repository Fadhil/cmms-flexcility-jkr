
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminWorkOrderNewComponent } from './admin-work-order-new/admin-work-order-new.component';
import { AdminWorkOrderViewComponent } from './admin-work-order-view/admin-work-order-view.component';
import { AdminWorkOrderEditComponent } from './admin-work-order-edit/admin-work-order-edit.component';
import { AdminWorkOrderHomeComponent } from './admin-work-order-home/admin-work-order-home.component';
import { AdminWorkOrderReportComponent } from './admin-work-order-report/admin-work-order-report.component';
import { AdminWorkOrderOpenComponent } from './admin-work-order-open/admin-work-order-open.component';
import { AdminWorkOrderOngoingComponent } from './admin-work-order-ongoing/admin-work-order-ongoing.component';
import { AdminWorkOrderClosedComponent } from './admin-work-order-closed/admin-work-order-closed.component';
import { AdminWorkOrderQuotationComponent } from './admin-work-order-quotation/admin-work-order-quotation.component';
import { AdminWorkOrderOpenViewComponent } from './admin-work-order-open-view/admin-work-order-open-view.component';
import { AdminWorkOrderOpenEditComponent } from './admin-work-order-open-edit/admin-work-order-open-edit.component';
import { AdminWorkOrderOpenAssessmentComponent } from './admin-work-order-open-assessment/admin-work-order-open-assessment.component';
import { AdminWorkOrderOngoingViewComponent } from './admin-work-order-ongoing-view/admin-work-order-ongoing-view.component';
import { AdminWorkOrderOngoingEditComponent } from './admin-work-order-ongoing-edit/admin-work-order-ongoing-edit.component';
import { AdminWorkOrderOngoingCompletionComponent } from './admin-work-order-ongoing-completion/admin-work-order-ongoing-completion.component';
import { AdminWorkOrderClosedViewComponent } from './admin-work-order-closed-view/admin-work-order-closed-view.component';
import { AdminWorkOrderClosedCompletionComponent } from './admin-work-order-closed-completion/admin-work-order-closed-completion.component';
import { AdminWorkOrderQuotationCompletionComponent } from './admin-work-order-quotation-completion/admin-work-order-quotation-completion.component';
import { AdminWorkOrderQuotationEditComponent } from './admin-work-order-quotation-edit/admin-work-order-quotation-edit.component';
import { AdminWorkOrderQuotationViewComponent } from './admin-work-order-quotation-view/admin-work-order-quotation-view.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Work Order'
    },
    children: [
      {
          path: 'report',
          component: AdminWorkOrderReportComponent,
          data: {
             title: 'Report'}
      },
      {
        path: 'open',
        component: AdminWorkOrderOpenComponent,
        data: {
          title: 'Open'
        },
        children: [
        {
          path: 'view',
          component: AdminWorkOrderOpenViewComponent,
          data: {
          title: 'View'
        }
        },
        {
          path: 'edit',
          component: AdminWorkOrderOpenEditComponent,
          data: {
          title: 'Edit'
          }
        },
        {
          path: 'assessment',
          component: AdminWorkOrderOpenAssessmentComponent,
          data: {
          title: 'Assessment'
          }
        }
        ]
      },
      {
        path: 'ongoing',
        component: AdminWorkOrderOngoingComponent,
        data: {
          title: 'Ongoing'
        },
        children: [
        {
          path: 'view',
          component: AdminWorkOrderOngoingViewComponent,
          data: {
          title: 'view'
          }
        },
        {
          path: 'edit',
          component: AdminWorkOrderOngoingEditComponent,
          data: {
          title: 'Edit'
          }
        },
        {
          path: 'completion',
          component: AdminWorkOrderOngoingCompletionComponent,
          data: {
          title: 'Completion'
          }
        }
        ]
      },
      {
        path: 'closed',
        component: AdminWorkOrderClosedComponent,
        data: {
          title: 'Closed'
        },
        children:[
        {
          path: 'view',
          component: AdminWorkOrderClosedViewComponent,
          data: {
          title: 'View'
          }
        },
        {
          path: 'completion',
          component: AdminWorkOrderClosedCompletionComponent,
          data: {
          title: 'Completion'
          }
        }
        ]
      },
      {
        path: 'quotation',
        component: AdminWorkOrderQuotationComponent,
        data: {
          title: 'Quotation'
        },
        children:[
        {
          path: 'view',
          component: AdminWorkOrderQuotationViewComponent,
          data: {
          title: 'view'
          }
        },
        {
          path: 'edit',
          component: AdminWorkOrderQuotationEditComponent,
          data: {
          title: 'Edit'
          }
        },
        {
          path: 'completion',
          component: AdminWorkOrderQuotationCompletionComponent,
          data: {
          title: 'Completion'
          }
        }
        ]
      },
      {
        path: '',
        component: AdminWorkOrderHomeComponent,
        data: {
          title: ''
        },
        children: [
          {
        path: 'new',
        component: AdminWorkOrderNewComponent,
        data: {
          title: 'New'
        }
          },
      {
        path: 'view',
        component: AdminWorkOrderViewComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'edit',
        component: AdminWorkOrderEditComponent,
        data: {
          title: 'Edit'
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
export class AdminWorkOrderRoutingModule {}

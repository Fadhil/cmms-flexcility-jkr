import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngWorkOrderHomeComponent } from './eng-work-order-home/eng-work-order-home.component';
import { EngDashboardComponent } from './eng-dashboard/eng-dashboard.component';
import { EngWorkOrderNewComponent } from './eng-work-order-new/eng-work-order-new.component';
import { EngWorkOrderViewComponent } from './eng-work-order-view/eng-work-order-view.component';
import { EngWorkOrderEditComponent } from './eng-work-order-edit/eng-work-order-edit.component';
import { EngWorkOrderCompletionComponent } from './eng-work-order-completion/eng-work-order-completion.component';
import { EngWorkOrderReportComponent } from './eng-work-order-report/eng-work-order-report.component';
import { EngWorkRequestHomeComponent } from './eng-work-request-home/eng-work-request-home.component';
import { EngWorkRequestNewComponent } from './eng-work-request-new/eng-work-request-new.component';
import { EngWorkRequestViewComponent } from './eng-work-request-view/eng-work-request-view.component';
import { EngWorkRequestEditComponent } from './eng-work-request-edit/eng-work-request-edit.component';
import { EngWorkRequestVerificationComponent } from './eng-work-request-verification/eng-work-request-verification.component';
import { EngWoOpenComponent } from './eng-wo-open/eng-wo-open.component';
import { EngWoOpenViewComponent } from './eng-wo-open-view/eng-wo-open-view.component';
import { EngWoOpenEditComponent } from './eng-wo-open-edit/eng-wo-open-edit.component';
import { EngWoOpenAssingmentComponent } from './eng-wo-open-assingment/eng-wo-open-assingment.component';
import { EngWoOngoingComponent } from './eng-wo-ongoing/eng-wo-ongoing.component';
import { EngWoOngoingViewComponent } from './eng-wo-ongoing-view/eng-wo-ongoing-view.component';
import { EngWoOngoingEditComponent } from './eng-wo-ongoing-edit/eng-wo-ongoing-edit.component';
import { EngWoOngoingCompletionComponent } from './eng-wo-ongoing-completion/eng-wo-ongoing-completion.component';
import { EngWoClosedComponent } from './eng-wo-closed/eng-wo-closed.component';
import { EngWoClosedViewComponent } from './eng-wo-closed-view/eng-wo-closed-view.component';
import { EngWoClosedVerificationComponent } from './eng-wo-closed-verification/eng-wo-closed-verification.component';
import { EngWoQuotationComponent } from './eng-wo-quotation/eng-wo-quotation.component';
import { EngWoQuotationViewComponent } from './eng-wo-quotation-view/eng-wo-quotation-view.component';
import { EngWoQuotationAcceptComponent } from './eng-wo-quotation-accept/eng-wo-quotation-accept.component';
import { EngWorkScheduleNewComponent } from './eng-work-schedule/eng-work-schedule-new/eng-work-schedule-new.component';
import { EngWorkScheduleEditComponent } from './eng-work-schedule/eng-work-schedule-edit/eng-work-schedule-edit.component';
import { EngWorkScheduleViewComponent } from './eng-work-schedule/eng-work-schedule-view/eng-work-schedule-view.component';
import { EngWorkScheduleListComponent } from './eng-work-schedule/eng-work-schedule-list/eng-work-schedule-list.component';
import { EngWorkScheduleCalendarComponent } from './eng-work-schedule/eng-work-schedule-calendar/eng-work-schedule-calendar.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [

      {
        path: 'dashboard',
        component:  EngDashboardComponent,
        data: {
        title: 'Dashboard'
        }
      },
      {
        path: 'schedule',
        data: {
          title: 'Schedule'
          },
        children: [
          {
            path: 'calendar',
            component: EngWorkScheduleCalendarComponent,
            data: {
              title: 'Calendar'
              }
          },
          {
            path: 'list',
            component: EngWorkScheduleListComponent,
            data: {
              title: 'List'
              }
          },
          {
            path: 'view',
            component: EngWorkScheduleViewComponent,
            data: {
              title: 'View'
              }
          },
          {
            path: 'new',
            component: EngWorkScheduleNewComponent,
            data: {
              title: 'New'
              }
          },
          {
            path: 'edit',
            component: EngWorkScheduleEditComponent,
            data: {
              title: 'Edit'
              }
          }
        ]
      },
      {
        path: 'report',
        component: EngWorkOrderReportComponent,
        data: {
            title: 'Report'
          }
       },
       {
        path: 'workrequest',
        component: EngWorkRequestHomeComponent,
        data: {
        title: 'Work Request'
        },
        children: [
        {
          path: 'new',
          component: EngWorkRequestNewComponent,
          data: {
            title: 'New'
          }
        },
        {
          path: 'view',
          component: EngWorkRequestViewComponent,
          data: {
            title: 'View'
          }
        },
        {
          path: 'edit',
          component: EngWorkRequestEditComponent,
          data: {
            title: 'Edit'
          }
        },
        {
          path: 'verification',
          component: EngWorkRequestVerificationComponent,
          data: {
            title: 'Verification'
          }
        }
        ]
      },
      {
        path: 'workorder',
        component: EngWorkOrderHomeComponent,
        data: {
        title: 'Work Order'
        },
        children: [
        {
          path: 'new',
          component: EngWorkOrderNewComponent,
          data: {
            title: 'New'
          }
        },
        {
          path: 'view',
          component: EngWorkOrderViewComponent,
          data: {
            title: 'View'
          }
        },
        {
          path: 'edit',
          component: EngWorkOrderEditComponent,
          data: {
            title: 'Edit'
          }
        },
        {
          path: 'completion',
          component: EngWorkOrderCompletionComponent,
          data: {
            title: 'Completion'
          }
        }

        ]
      },
      {
        path: 'openworkorder',
        component: EngWoOpenComponent,
        data: {
          title : 'Open Work Order'
        },
        children: [
          {
            path: 'view',
            component: EngWoOpenViewComponent,
            data: {
              title : 'View'
            }
          },
          {
            path: 'edit',
            component: EngWoOpenEditComponent,
            data: {
              title : 'Edit'
            }
          },
          {
            path: 'assign',
            component: EngWoOpenAssingmentComponent,
            data: {
              title : 'Edit'
            }
          }
        ]
      },
      {
        path: 'ongoingworkorder',
        component: EngWoOngoingComponent,
        data: {
          title : 'Ongoing Work Order'
        },
        children: [
          {
            path: 'view',
            component: EngWoOngoingViewComponent,
            data: {
              title : 'View'
            }
          },
          {
            path: 'edit',
            component: EngWoOngoingEditComponent,
            data: {
              title : 'Edit'
            }
          },
          {
            path: 'completion',
            component: EngWoOngoingCompletionComponent,
            data: {
              title : 'Completion'
            }
          }
        ]
      },
      {
        path: 'closedworkorder',
        component: EngWoClosedComponent,
        data: {
          title : 'Closed Work Order'
        },
        children: [
          {
            path: 'view',
            component: EngWoClosedViewComponent,
            data: {
              title : 'View'
            }
          },
          {
            path: 'verification',
            component: EngWoClosedVerificationComponent,
            data: {
              title : 'Verification'
            }
          }
        ]
      },
      {
        path: 'quotationworkorder',
        component: EngWoQuotationComponent,
        data: {
          title : 'Quotation Work Order',
        },
        children:[
          {
            path: 'view',
            component : EngWoQuotationViewComponent,
            data: {
              title : 'view'
            }
          }
        ]
      },
      {
        path: 'acceptpo',
        component:EngWoQuotationAcceptComponent,
        data: {
          title : 'Accept Quotation'
        }
      }

      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineerRoutingModule {}

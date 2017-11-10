import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpdeskDashboardComponent } from './helpdesk-dashboard/helpdesk-dashboard.component';
import { HelpdeskWorkRequestHomeComponent } from './helpdesk-work-request/helpdesk-work-request-home/helpdesk-work-request-home.component';
import { HelpdeskWorkRequestViewComponent } from './helpdesk-work-request/helpdesk-work-request-view/helpdesk-work-request-view.component';
import { HelpdeskWorkRequestEditComponent } from './helpdesk-work-request/helpdesk-work-request-edit/helpdesk-work-request-edit.component';
import { HelpdeskWorkRequestNewComponent } from './helpdesk-work-request/helpdesk-work-request-new/helpdesk-work-request-new.component';
import { HelpdeskWorkRequestVerificationComponent } from './helpdesk-work-request/helpdesk-work-request-verification/helpdesk-work-request-verification.component';
import { HelpdeskWorkOrderHomeComponent } from './helpdesk-work-order/helpdesk-work-order-home/helpdesk-work-order-home.component';
import { HelpdeskWorkOrderEditComponent } from './helpdesk-work-order/helpdesk-work-order-edit/helpdesk-work-order-edit.component';
import { HelpdeskWorkOrderNewComponent } from './helpdesk-work-order/helpdesk-work-order-new/helpdesk-work-order-new.component';
import { HelpdeskWorkOrderViewComponent } from './helpdesk-work-order/helpdesk-work-order-view/helpdesk-work-order-view.component';
import { HelpdeskWorkOrderReportComponent } from './helpdesk-work-order/helpdesk-work-order-report/helpdesk-work-order-report.component';
import { HelpdeskWrNewVerificationComponent } from './helpdesk-work-request/helpdesk-wr-new-verification/helpdesk-wr-new-verification.component';
import { HelpdeskWrNewEditComponent } from './helpdesk-work-request/helpdesk-wr-new-edit/helpdesk-wr-new-edit.component';
import { HelpdeskWrNewViewComponent } from './helpdesk-work-request/helpdesk-wr-new-view/helpdesk-wr-new-view.component';
import { HelpdeskWrNewComponent } from './helpdesk-work-request/helpdesk-wr-new/helpdesk-wr-new.component';
import { HelpdeskWrOpenComponent } from './helpdesk-work-request/helpdesk-wr-open/helpdesk-wr-open.component';
import { HelpdeskWrOpenViewComponent } from './helpdesk-work-request/helpdesk-wr-open-view/helpdesk-wr-open-view.component';
import { HelpdeskWrOpenEditComponent } from './helpdesk-work-request/helpdesk-wr-open-edit/helpdesk-wr-open-edit.component';
import { HelpdeskWrOpenVerificationComponent } from './helpdesk-work-request/helpdesk-wr-open-verification/helpdesk-wr-open-verification.component';
import { HelpdeskWrVerifiedComponent } from './helpdesk-work-request/helpdesk-wr-verified/helpdesk-wr-verified.component';
import { HelpdeskWrVerifiedViewComponent } from './helpdesk-work-request/helpdesk-wr-verified-view/helpdesk-wr-verified-view.component';
import { HelpdeskWrVerifiedEditComponent } from './helpdesk-work-request/helpdesk-wr-verified-edit/helpdesk-wr-verified-edit.component';
import { HelpdeskWrVerifiedAssignComponent } from './helpdesk-work-request/helpdesk-wr-verified-assign/helpdesk-wr-verified-assign.component';
import { HelpdeskWrCancelledComponent } from './helpdesk-work-request/helpdesk-wr-cancelled/helpdesk-wr-cancelled.component';
import { HelpdeskWrCancelledViewComponent } from './helpdesk-work-request/helpdesk-wr-cancelled-view/helpdesk-wr-cancelled-view.component';
import { HelpdeskWrCancelledConfirmationComponent } from './helpdesk-work-request/helpdesk-wr-cancelled-confirmation/helpdesk-wr-cancelled-confirmation.component';
import { HelpdeskScheduleListComponent } from './helpdesk-schedule/helpdesk-schedule-list/helpdesk-schedule-list.component';
import { HelpdeskScheduleCalendarComponent } from './helpdesk-schedule/helpdesk-schedule-calendar/helpdesk-schedule-calendar.component';
import { HelpdeskScheduleEditComponent } from './helpdesk-schedule/helpdesk-schedule-edit/helpdesk-schedule-edit.component';
import { HelpdeskScheduleNewComponent } from './helpdesk-schedule/helpdesk-schedule-new/helpdesk-schedule-new.component';
import { HelpdeskScheduleViewComponent } from './helpdesk-schedule/helpdesk-schedule-view/helpdesk-schedule-view.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: 'dashboard',
        component: HelpdeskDashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'schedule',
        data:{
          title: 'Work Schedule'
        },
        children:[
          {
            path: 'calendar',
            component: HelpdeskScheduleCalendarComponent,
            data: {
              title: 'Calendar'
            }
          },
          {
            path: 'list',
            component: HelpdeskScheduleListComponent,
            data: {
            title: 'List'
            }
          },
          {
            path: 'new',
            component: HelpdeskScheduleNewComponent,
            data: {
            title: 'New'
            }
          },
          {
            path: 'view',
            component: HelpdeskScheduleViewComponent,
            data: {
            title: 'View'
            }
          },
          {
            path: 'edit',
            component: HelpdeskScheduleEditComponent,
            data: {
            title: 'Edit'
            }
          }
        ]
      },
      {
        path: 'workrequest',
        component: HelpdeskWorkRequestHomeComponent,
        data: {
          title: 'Work Request'
        },
        children:[
        {
          path: 'new',
          component: HelpdeskWorkRequestNewComponent,
          data: {
          title: 'New'
          }
        },
        {
          path: 'view',
          component: HelpdeskWorkRequestViewComponent,
          data: {
          title: 'View'
          }
        },
        {
          path: 'edit',
          component: HelpdeskWorkRequestEditComponent,
          data: {
          title: 'Edit'
          }
        },
        {
          path: 'verification',
          component: HelpdeskWorkRequestVerificationComponent,
          data: {
          title: 'Verification'
          }
        }

        ]
      },
      {
        path: 'newworkrequest',
        component: HelpdeskWrNewComponent,
        data: {
          title: 'New Work Request'
        },
        children :[
            {
              path: 'view',
              component: HelpdeskWrNewViewComponent,
              data: {
                title: 'View'
              }
            },
            {
              path: 'edit',
              component: HelpdeskWrNewEditComponent,
              data: {
                title: 'Edit'
              }
            },
            {
              path: 'verification',
              component: HelpdeskWrNewVerificationComponent,
              data: {
                title: 'Verification'
              }
            }
        ]
      },
      {
        path: 'openworkrequest',
        component: HelpdeskWrOpenComponent,
        data: {
          title: 'Open Work Request'
        },
        children :[
            {
              path: 'view',
              component: HelpdeskWrOpenViewComponent,
              data: {
                title: 'View'
              }
            },
            {
              path: 'edit',
              component: HelpdeskWrOpenEditComponent,
              data: {
                title: 'Edit'
              }
            },
            {
              path: 'verification',
              component: HelpdeskWrOpenVerificationComponent,
              data: {
                title: 'Verification'
              }
            }
        ]
      },
      {
        path: 'verifiedworkrequest',
        component: HelpdeskWrVerifiedComponent,
        data: {
          title: 'Verified Work Request'
        },
        children :[
            {
              path: 'view',
              component: HelpdeskWrVerifiedViewComponent,
              data: {
                title: 'View'
              }
            },
            {
              path: 'edit',
              component: HelpdeskWrVerifiedEditComponent,
              data: {
                title: 'Edit'
              }
            },
            {
              path: 'verification',
              component: HelpdeskWrVerifiedAssignComponent,
              data: {
                title: 'Verification'
              }
            }
        ]
      },
      {
        path: 'cancelledworkrequest',
        component: HelpdeskWrCancelledComponent,
        data: {
          title: 'Cancelled Work Request'
        },
        children :[
            {
              path: 'view',
              component: HelpdeskWrCancelledViewComponent,
              data: {
                title: 'View'
              }
            },
            // {
            //   path: 'edit',
            //   component: HelpdeskWrCancelledEditComponent,
            //   data: {
            //     title: 'Edit'
            //   }
            // },
            {
              path: 'verification',
              component: HelpdeskWrCancelledConfirmationComponent,
              data: {
                title: 'new'
              }
            }
        ]
      },
      {
        path: 'workorder',
        component: HelpdeskWorkOrderHomeComponent,
        data: {
          title: 'Work Order'
        },
        children:[
        {
          path: 'new',
          component: HelpdeskWorkOrderNewComponent,
          data: {
          title: 'New'
          }
        },
        {
          path: 'view',
          component: HelpdeskWorkOrderViewComponent,
          data: {
          title: 'View'
          }
        },
        {
          path: 'edit',
          component: HelpdeskWorkOrderEditComponent,
          data: {
          title: 'Edit'
          }
        }
        ]
      },
      {
          path: 'report',
          component: HelpdeskWorkOrderReportComponent,
          data: {
          title: 'Report'
          }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpdeskRoutingModule {}
/**
 * Created by fadhil on 27/05/2017.
 */

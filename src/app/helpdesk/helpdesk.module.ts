import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageUploadModule } from 'angular2-image-upload';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HelpdeskDashboardComponent } from './helpdesk-dashboard/helpdesk-dashboard.component';
import { HelpdeskRoutingModule  } from "./helpdesk-routing.module";
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
import { HelpdeskWrNewComponent } from './helpdesk-work-request/helpdesk-wr-new/helpdesk-wr-new.component';
import { HelpdeskWrNewViewComponent } from './helpdesk-work-request/helpdesk-wr-new-view/helpdesk-wr-new-view.component';
import { HelpdeskWrNewVerificationComponent } from './helpdesk-work-request/helpdesk-wr-new-verification/helpdesk-wr-new-verification.component';
import { HelpdeskWrNewEditComponent } from './helpdesk-work-request/helpdesk-wr-new-edit/helpdesk-wr-new-edit.component';
import { HelpdeskWrOpenComponent } from './helpdesk-work-request/helpdesk-wr-open/helpdesk-wr-open.component';
import { HelpdeskWrVerifiedComponent } from './helpdesk-work-request/helpdesk-wr-verified/helpdesk-wr-verified.component';
import { HelpdeskWrCancelledComponent } from './helpdesk-work-request/helpdesk-wr-cancelled/helpdesk-wr-cancelled.component';
import { HelpdeskWrOpenViewComponent } from './helpdesk-work-request/helpdesk-wr-open-view/helpdesk-wr-open-view.component';
import { HelpdeskWrOpenEditComponent } from './helpdesk-work-request/helpdesk-wr-open-edit/helpdesk-wr-open-edit.component';
import { HelpdeskWrOpenVerificationComponent } from './helpdesk-work-request/helpdesk-wr-open-verification/helpdesk-wr-open-verification.component';
import { HelpdeskWrVerifiedViewComponent } from './helpdesk-work-request/helpdesk-wr-verified-view/helpdesk-wr-verified-view.component';
import { HelpdeskWrVerifiedEditComponent } from './helpdesk-work-request/helpdesk-wr-verified-edit/helpdesk-wr-verified-edit.component';
import { HelpdeskWrVerifiedAssignComponent } from './helpdesk-work-request/helpdesk-wr-verified-assign/helpdesk-wr-verified-assign.component';
import { HelpdeskWrCancelledViewComponent } from './helpdesk-work-request/helpdesk-wr-cancelled-view/helpdesk-wr-cancelled-view.component';
import { HelpdeskWrCancelledConfirmationComponent } from './helpdesk-work-request/helpdesk-wr-cancelled-confirmation/helpdesk-wr-cancelled-confirmation.component';
import { HelpdeskScheduleListComponent } from './helpdesk-schedule/helpdesk-schedule-list/helpdesk-schedule-list.component';
import { HelpdeskScheduleCalendarComponent } from './helpdesk-schedule/helpdesk-schedule-calendar/helpdesk-schedule-calendar.component';
import { HelpdeskScheduleEditComponent } from './helpdesk-schedule/helpdesk-schedule-edit/helpdesk-schedule-edit.component';
import { HelpdeskScheduleNewComponent } from './helpdesk-schedule/helpdesk-schedule-new/helpdesk-schedule-new.component';
import { HelpdeskScheduleViewComponent } from './helpdesk-schedule/helpdesk-schedule-view/helpdesk-schedule-view.component';
import {CalendarModule} from "ap-angular2-fullcalendar";


@NgModule({
  imports: [
  	FormsModule,
  	ReactiveFormsModule,
    CommonModule,
    HelpdeskRoutingModule,
    ModalModule.forRoot(),
    ImageUploadModule.forRoot(),
    CalendarModule
  ],
  declarations: [

  HelpdeskDashboardComponent,
  HelpdeskWorkRequestHomeComponent,
  HelpdeskWorkRequestViewComponent,
  HelpdeskWorkRequestEditComponent,
  HelpdeskWorkRequestNewComponent,
  HelpdeskWorkRequestVerificationComponent,
  HelpdeskWorkOrderHomeComponent,
  HelpdeskWorkOrderEditComponent,
  HelpdeskWorkOrderNewComponent,
  HelpdeskWorkOrderViewComponent,
  HelpdeskWorkOrderReportComponent,
  HelpdeskWrNewVerificationComponent,
  HelpdeskWrNewEditComponent,
  HelpdeskWrNewViewComponent,
  HelpdeskWrNewComponent,
  HelpdeskWrOpenComponent,
  HelpdeskWrVerifiedComponent,
  HelpdeskWrCancelledComponent,
  HelpdeskWrOpenViewComponent,
  HelpdeskWrOpenEditComponent,
  HelpdeskWrOpenVerificationComponent,
  HelpdeskWrVerifiedViewComponent,
  HelpdeskWrVerifiedEditComponent,
  HelpdeskWrVerifiedAssignComponent,
  HelpdeskWrCancelledViewComponent,
  HelpdeskWrCancelledConfirmationComponent,
  HelpdeskScheduleCalendarComponent,
  HelpdeskScheduleListComponent,
  HelpdeskScheduleEditComponent,
  HelpdeskScheduleNewComponent,
  HelpdeskScheduleViewComponent,
]
})
export class HelpdeskModule { }

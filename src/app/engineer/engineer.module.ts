import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EngineerRoutingModule } from './engineer-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxGalleryModule } from 'ngx-gallery';
import { EngWorkOrderHomeComponent } from './eng-work-order-home/eng-work-order-home.component';
import { EngDashboardComponent } from './eng-dashboard/eng-dashboard.component';
import { EngWorkOrderViewComponent } from './eng-work-order-view/eng-work-order-view.component';
import { EngWorkOrderNewComponent } from './eng-work-order-new/eng-work-order-new.component';
import { EngWorkOrderEditComponent } from './eng-work-order-edit/eng-work-order-edit.component';
import { EngWorkRequestHomeComponent } from './eng-work-request-home/eng-work-request-home.component';
import { EngWorkRequestNewComponent } from './eng-work-request-new/eng-work-request-new.component';
import { EngWorkRequestViewComponent } from './eng-work-request-view/eng-work-request-view.component';
import { EngWorkRequestEditComponent } from './eng-work-request-edit/eng-work-request-edit.component';
import { EngWorkOrderCompletionComponent } from './eng-work-order-completion/eng-work-order-completion.component';
import { EngWorkOrderReportComponent } from './eng-work-order-report/eng-work-order-report.component';
import { EngWorkRequestVerificationComponent } from './eng-work-request-verification/eng-work-request-verification.component';
import {CalendarModule} from "ap-angular2-fullcalendar";
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
import { EngWoQuotationEditComponent } from './eng-wo-quotation-edit/eng-wo-quotation-edit.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ModalModule.forRoot(),
    AngularMultiSelectModule,
    EngineerRoutingModule,
    ImageUploadModule.forRoot(),
    CalendarModule,
    TabsModule.forRoot(),
    NgxGalleryModule
  ],

  declarations: [
  EngWorkOrderHomeComponent,
  EngDashboardComponent,
  EngWorkOrderViewComponent,
  EngWorkOrderNewComponent,
  EngWorkOrderEditComponent,
  EngWorkRequestHomeComponent,
  EngWorkRequestNewComponent,
  EngWorkRequestViewComponent,
  EngWorkRequestEditComponent,
  EngWorkOrderCompletionComponent,
  EngWorkOrderReportComponent,
  EngWorkRequestVerificationComponent,
  EngWoOpenComponent,
  EngWoOpenViewComponent,
  EngWoOpenEditComponent,
  EngWoOpenAssingmentComponent,
  EngWoOngoingComponent,
  EngWoOngoingViewComponent,
  EngWoOngoingEditComponent,
  EngWoOngoingCompletionComponent,
  EngWoClosedComponent,
  EngWoClosedViewComponent,
  EngWoClosedVerificationComponent,
  EngWoQuotationComponent,
  EngWoQuotationViewComponent,
  EngWoQuotationAcceptComponent,
  EngWorkScheduleNewComponent,
  EngWorkScheduleEditComponent,
  EngWorkScheduleViewComponent,
  EngWorkScheduleListComponent,
  EngWorkScheduleCalendarComponent,
    EngWoQuotationEditComponent
]
})
export class EngineerModule { }
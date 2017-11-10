import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminWorkOrderRoutingModule } from './admin-work-order-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { ModalModule } from 'ngx-bootstrap/modal';
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


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AdminWorkOrderRoutingModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [AdminWorkOrderHomeComponent, AdminWorkOrderNewComponent, AdminWorkOrderViewComponent, AdminWorkOrderEditComponent
, AdminWorkOrderReportComponent, AdminWorkOrderOpenComponent, AdminWorkOrderOngoingComponent, AdminWorkOrderClosedComponent, AdminWorkOrderQuotationComponent, AdminWorkOrderOpenViewComponent, AdminWorkOrderOpenEditComponent, AdminWorkOrderOpenAssessmentComponent, AdminWorkOrderOngoingViewComponent, AdminWorkOrderOngoingEditComponent, AdminWorkOrderOngoingCompletionComponent, AdminWorkOrderClosedViewComponent, AdminWorkOrderClosedCompletionComponent, AdminWorkOrderQuotationCompletionComponent, AdminWorkOrderQuotationEditComponent, AdminWorkOrderQuotationViewComponent]
})
export class AdminWorkOrderModule { }
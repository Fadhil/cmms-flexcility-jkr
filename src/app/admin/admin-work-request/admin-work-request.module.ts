import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from 'ngx-gallery';
import { AdminWorkRequestRoutingModule } from './admin-work-request-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminWorkRequestHomeComponent } from './admin-work-request-home/admin-work-request-home.component';
import { AdminWorkRequestNewComponent } from './admin-work-request-new/admin-work-request-new.component';
import { AdminWorkRequestEditComponent } from './admin-work-request-edit/admin-work-request-edit.component';
import { AdminWorkRequestViewComponent } from './admin-work-request-view/admin-work-request-view.component';
import { AdminWorkRequestVerificationComponent } from './admin-work-request-verification/admin-work-request-verification.component';
import { AdminWrNewComponent } from './admin-wr-new/admin-wr-new.component';
import { AdminWrOpenComponent } from './admin-wr-open/admin-wr-open.component';
import { AdminWrVerifiedComponent } from './admin-wr-verified/admin-wr-verified.component';
import { AdminWrCancelledComponent } from './admin-wr-cancelled/admin-wr-cancelled.component';
import { AdminWrNewViewComponent } from './admin-wr-new-view/admin-wr-new-view.component';
import { AdminWrNewVerificationComponent } from './admin-wr-new-verification/admin-wr-new-verification.component';
import { AdminWrNewEditComponent } from './admin-wr-new-edit/admin-wr-new-edit.component';
import { AdminWrOpenViewComponent } from './admin-wr-open-view/admin-wr-open-view.component';
import { AdminWrOpenEditComponent } from './admin-wr-open-edit/admin-wr-open-edit.component';
import { AdminWrOpenVerificationComponent } from './admin-wr-open-verification/admin-wr-open-verification.component';
import { AdminWrVerifiedViewComponent } from './admin-wr-verified-view/admin-wr-verified-view.component';
import { AdminWrVerifiedAssignComponent } from './admin-wr-verified-assign/admin-wr-verified-assign.component';
import { AdminWrCancelledViewComponent } from './admin-wr-cancelled-view/admin-wr-cancelled-view.component';
import { AdminWrCancelledConfirmationComponent } from './admin-wr-cancelled-confirmation/admin-wr-cancelled-confirmation.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AdminWorkRequestRoutingModule,
    TabsModule.forRoot(),
    NgxGalleryModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [ AdminWorkRequestHomeComponent, AdminWorkRequestNewComponent, AdminWorkRequestEditComponent, AdminWorkRequestViewComponent, AdminWorkRequestVerificationComponent, AdminWrNewComponent, AdminWrOpenComponent, AdminWrVerifiedComponent, AdminWrCancelledComponent, AdminWrNewViewComponent, AdminWrNewVerificationComponent, AdminWrNewEditComponent, AdminWrOpenViewComponent, AdminWrOpenEditComponent, AdminWrOpenVerificationComponent, AdminWrVerifiedViewComponent, AdminWrVerifiedAssignComponent, AdminWrCancelledViewComponent, AdminWrCancelledConfirmationComponent]
})
export class AdminWorkRequestModule { }
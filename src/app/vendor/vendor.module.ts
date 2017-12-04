import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { VendorRoutingModule } from './vendor-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { VendorWorkOrderHomeComponent } from './vendor-work-order-home/vendor-work-order-home.component';
import { VendorWorkOrderViewComponent } from './vendor-work-order-view/vendor-work-order-view.component';
import { VendorWorkOrderCompletionComponent } from './vendor-work-order-completion/vendor-work-order-completion.component';
import { VendorWorkRequestHomeComponent } from './vendor-work-request-home/vendor-work-request-home.component';
import { VendorWorkRequestViewComponent } from './vendor-work-request-view/vendor-work-request-view.component';
import { VendorWorkRequestQuotationComponent } from './vendor-work-request-quotation/vendor-work-request-quotation.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    AngularMultiSelectModule,
    VendorRoutingModule,
    ImageUploadModule.forRoot(),
    ModalModule.forRoot(),
  ],
  declarations: [
    VendorWorkOrderHomeComponent,
    VendorWorkOrderViewComponent,
    VendorWorkOrderCompletionComponent,
    VendorWorkRequestHomeComponent,
    VendorWorkRequestViewComponent,
    VendorWorkRequestQuotationComponent,
    VendorDashboardComponent
]
})
export class VendorModule { }
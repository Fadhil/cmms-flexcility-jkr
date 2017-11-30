import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from 'ngx-gallery';
import { ClientServiceRequisitionComponent } from './client-service-requisition/client-service-requisition.component';
import { ClientRoutingModule } from './client-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { ClientServiceRequisitionSummaryComponent } from './client-service-requisition-summary/client-service-requisition-summary.component';
import { ClientWorkRequestComponent } from './client-work-request/client-work-request.component';
import { ClientWorkRequestViewComponent } from './client-work-request-view/client-work-request-view.component';
import { ClientWorkRequestRateComponent } from './client-work-request-rate/client-work-request-rate.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    ImageUploadModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule
  ],
  declarations: [
    ClientServiceRequisitionComponent,
    ClientServiceRequisitionSummaryComponent,
    HomeComponent,
    ClientWorkRequestComponent,
    ClientWorkRequestViewComponent,
    ClientWorkRequestRateComponent
]
})
export class ClientModule { }

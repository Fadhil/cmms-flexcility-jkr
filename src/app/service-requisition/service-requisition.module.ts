import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CommonModule } from '@angular/common';
import { ServiceRequisitionComponent } from './service-requisition.component';
import { ServiceRequisitionRoutingModule } from './service-requisition-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';

@NgModule({
  imports: [
    HttpModule,
    ServiceRequisitionRoutingModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [ServiceRequisitionComponent]
})
export class ServiceRequisitionModule { }

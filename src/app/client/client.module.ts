import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClientServiceRequisitionComponent } from './client-service-requisition/client-service-requisition.component';
import { ClientRoutingModule } from './client-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { ClientServiceRequisitionSummaryComponent } from './client-service-requisition-summary/client-service-requisition-summary.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [ClientServiceRequisitionComponent, ClientServiceRequisitionSummaryComponent, HomeComponent
]
})
export class ClientModule { }

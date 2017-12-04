import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TechnicianRoutingModule } from './technician-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { TechWorkRequestComponent } from './tech-work-request/tech-work-request.component';
import { TechWorkOrderComponent } from './tech-work-order/tech-work-order.component';
import { TechDashboardComponent } from './tech-dashboard/tech-dashboard.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ModalModule.forRoot(),
    AngularMultiSelectModule,
    TechnicianRoutingModule,
    ImageUploadModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule,

  ],

  declarations: [
    TechWorkRequestComponent, 
    TechWorkOrderComponent,
    TechDashboardComponent
]
})
export class TechnicianModule { }
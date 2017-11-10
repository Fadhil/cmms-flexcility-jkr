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


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    AngularMultiSelectModule,
    TechnicianRoutingModule,
    ImageUploadModule.forRoot()
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [TechWorkRequestComponent, TechWorkOrderComponent]
})
export class TechnicianModule { }
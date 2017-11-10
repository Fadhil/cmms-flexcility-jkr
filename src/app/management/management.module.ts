import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ManagementRoutingModule } from './management-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ModalModule.forRoot(),
    AngularMultiSelectModule,
    ManagementRoutingModule,
    ImageUploadModule.forRoot()
  ],

  declarations: [
    DashboardComponent
  ]
})
export class ManagementModule { }
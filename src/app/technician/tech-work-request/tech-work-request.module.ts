import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { TechWorkRequestRoutingModule } from './tech-work-request-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from 'ngx-gallery';
import { TechWorkRequestHomeComponent } from './tech-work-request-home/tech-work-request-home.component';
import { TechWorkRequestViewComponent } from './tech-work-request-view/tech-work-request-view.component';
import { TechWorkRequestEditComponent } from './tech-work-request-edit/tech-work-request-edit.component';
import { TechWorkRequestVerificationComponent } from './tech-work-request-verification/tech-work-request-verification.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TechWorkRequestRoutingModule,
    ImageUploadModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule
  ],
  declarations: [
    TechWorkRequestHomeComponent,
    TechWorkRequestViewComponent,
    TechWorkRequestEditComponent,
    TechWorkRequestVerificationComponent
  ]
})
export class TechWorkRequestModule { }
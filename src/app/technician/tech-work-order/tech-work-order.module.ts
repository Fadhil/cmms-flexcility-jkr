import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TechWorkOrderRoutingModule } from './tech-work-order-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from 'ngx-gallery';
import { TechWorkOrderHomeComponent } from './tech-work-order-home/tech-work-order-home.component';
import { TechWorkOrderViewComponent } from './tech-work-order-view/tech-work-order-view.component';
import { TechWorkOrderEditComponent } from './tech-work-order-edit/tech-work-order-edit.component';
import { TechWorkOrderCompletionComponent } from './tech-work-order-completion/tech-work-order-completion.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TechWorkOrderRoutingModule,
    ImageUploadModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule
  ],
  declarations: [
    TechWorkOrderHomeComponent,
    TechWorkOrderViewComponent,
    TechWorkOrderEditComponent,
    TechWorkOrderCompletionComponent
  ]
})
export class TechWorkOrderModule { }
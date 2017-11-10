import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminAreaRoutingModule } from './admin-area-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminAreaNewComponent } from './admin-area-new/admin-area-new.component';
import { AdminAreaViewComponent } from './admin-area-view/admin-area-view.component';
import { AdminAreaEditComponent } from './admin-area-edit/admin-area-edit.component';



@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    AdminAreaRoutingModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [AdminAreaNewComponent, AdminAreaViewComponent, AdminAreaEditComponent]
})
export class AdminAreaModule { }
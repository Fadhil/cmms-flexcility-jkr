import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminBuildingRoutingModule } from './admin-building-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminBuildingNewComponent } from './admin-building-new/admin-building-new.component';
import { AdminBuildingViewComponent } from './admin-building-view/admin-building-view.component';
import { AdminBuildingEditComponent } from './admin-building-edit/admin-building-edit.component';



@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    AdminBuildingRoutingModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [AdminBuildingNewComponent, AdminBuildingViewComponent, AdminBuildingEditComponent]
})
export class AdminBuildingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminSiteRoutingModule } from './admin-site-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { AdminSiteNewComponent } from './admin-site-new/admin-site-new.component';
import { AdminSiteHomeComponent } from './admin-site-home/admin-site-home.component';
import { AdminSiteViewComponent } from './admin-site-view/admin-site-view.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminSiteEditComponent } from './admin-site-edit/admin-site-edit.component';


@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    AdminSiteRoutingModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [ AdminSiteNewComponent, AdminSiteHomeComponent, AdminSiteViewComponent, AdminSiteEditComponent]
})
export class AdminSiteModule { }
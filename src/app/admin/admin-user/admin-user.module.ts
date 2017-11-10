import { AdminUserComponent } from './admin-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminUserRoutingModule } from './admin-user-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { AdminUserNewComponent } from './admin-user-new/admin-user-new.component';
import { AdminUserHomeComponent } from './admin-user-home/admin-user-home.component';
import { AdminUserViewComponent } from './admin-user-view/admin-user-view.component';
import { AdminUserEditComponent } from './admin-user-edit/admin-user-edit.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModel } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ModalModule.forRoot(),
    AdminUserRoutingModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [AdminUserNewComponent, AdminUserHomeComponent, AdminUserViewComponent, AdminUserEditComponent]
})
export class AdminUserModule { }
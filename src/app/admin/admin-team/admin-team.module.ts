import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AdminTeamRoutingModule } from './admin-team-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { AdminTeamHomeComponent } from './admin-team-home/admin-team-home.component';
import { AdminTeamNewComponent } from './admin-team-new/admin-team-new.component';
import { AdminTeamEditComponent } from './admin-team-edit/admin-team-edit.component';
import { AdminTeamViewComponent } from './admin-team-view/admin-team-view.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,    
	  ReactiveFormsModule,
    FormsModule,
    AngularMultiSelectModule,
    AdminTeamRoutingModule,
    ModalModule.forRoot(),  
    ImageUploadModule.forRoot()
  ],
  declarations: [AdminTeamHomeComponent, AdminTeamNewComponent, AdminTeamEditComponent, AdminTeamViewComponent]
})
export class AdminTeamModule { }
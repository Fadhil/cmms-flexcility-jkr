import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminWorkScheduleRoutingModule } from './admin-work-schedule-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminWsCalendarComponent } from './admin-ws-calendar/admin-ws-calendar.component';
import { AdminWsListComponent } from './admin-ws-list/admin-ws-list.component';
import {CalendarModule} from "ap-angular2-fullcalendar";
import { AdminWsNewComponent } from './admin-ws-new/admin-ws-new.component';
import { AdminWsViewComponent } from './admin-ws-view/admin-ws-view.component';
import { AdminWsEditComponent } from './admin-ws-edit/admin-ws-edit.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AdminWorkScheduleRoutingModule,
    CalendarModule,
    ImageUploadModule.forRoot(),

  ],
  declarations: [AdminWsCalendarComponent, AdminWsListComponent,
    AdminWsNewComponent,
    AdminWsViewComponent,
    AdminWsEditComponent
]
})
export class AdminWorkScheduleModule { }
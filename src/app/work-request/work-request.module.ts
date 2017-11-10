import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { WorkRequestComponent } from './work-request.component';
import { WorkRequestRoutingModule } from './work-request-routing.module';
import { WorkRequestVerificationComponent } from './work-request-verification/work-request-verification.component';
import { WorkRequestIndexComponent } from './work-request-index/work-request-index.component';
import { WorkRequestNewComponent } from './work-request-new/work-request-new.component';
import { WorkRequestOpenComponent } from './work-request-open/work-request-open.component';
import { WorkRequestAssignComponent } from './work-request-assign/work-request-assign.component';


@NgModule({
  imports: [
    WorkRequestRoutingModule,
    CommonModule,
    ModalModule.forRoot(),
  ],
  declarations: [WorkRequestComponent, WorkRequestVerificationComponent, WorkRequestIndexComponent, WorkRequestNewComponent, WorkRequestOpenComponent, WorkRequestAssignComponent]
})
export class WorkRequestModule { }

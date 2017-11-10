/**
 * Created by fadhil on 12/05/2017.
 */
import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';

import { WorkRequestComponent } from './work-request.component';
import { WorkRequestVerificationComponent } from './work-request-verification/work-request-verification.component';
import { WorkRequestIndexComponent } from './work-request-index/work-request-index.component';
import { WorkRequestNewComponent } from './work-request-new/work-request-new.component';
import { WorkRequestOpenComponent } from './work-request-open/work-request-open.component';
import { WorkRequestAssignComponent } from './work-request-assign/work-request-assign.component';

const routes: Routes = [
  {
    path: '',
    component: WorkRequestComponent,
    data: {
      title: 'Work Request'
    }
  },
  {
    path: 'verification',
    component: WorkRequestVerificationComponent,
    data: {
      title: 'Work Request Verification'
    }
  },
  {
    path: 'index',
    component: WorkRequestIndexComponent,
    data: {
      title: 'Work Request Listing'
    }
  },
  {
    path: 'unassigned',
    component: WorkRequestNewComponent,
    data: {
      title: 'New Work Request Listing'
    }
  },
  {
    path: 'assign',
    component: WorkRequestAssignComponent,
    data: {
      title: 'Assign Work Request Listing'
    }
  },
  {
    path: 'open',
    component: WorkRequestOpenComponent,
    data: {
      title: 'Open Work Request Listing'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRequestRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechWorkRequestHomeComponent } from './tech-work-request-home/tech-work-request-home.component';
import { TechWorkRequestViewComponent } from './tech-work-request-view/tech-work-request-view.component';
import { TechWorkRequestEditComponent } from './tech-work-request-edit/tech-work-request-edit.component';
import { TechWorkRequestVerificationComponent } from './tech-work-request-verification/tech-work-request-verification.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Work Request'
    },
    children: [
      {
        path: '',
        component: TechWorkRequestHomeComponent,
        data: {
          title: ''
        },
        children: [
        {
          path: 'view',
          component: TechWorkRequestViewComponent,
          data: {
          title: 'View'
              }
        },
        {
          path: 'edit',
          component: TechWorkRequestEditComponent,
          data: {
          title: 'Edit'
              }
        },
        {
          path: 'verification',
          component: TechWorkRequestVerificationComponent,
          data: {
          title: 'Verification'
              }
        }
        ]
      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechWorkRequestRoutingModule {}

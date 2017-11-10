import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechWorkOrderHomeComponent } from './tech-work-order-home/tech-work-order-home.component';
import { TechWorkOrderViewComponent } from './tech-work-order-view/tech-work-order-view.component';
import { TechWorkOrderEditComponent } from './tech-work-order-edit/tech-work-order-edit.component';
import { TechWorkOrderCompletionComponent } from './tech-work-order-completion/tech-work-order-completion.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Work Order'
    },
    children: [
      {
        path: '',
        component:TechWorkOrderHomeComponent,
        data: {
          title: ''
        },
        children: [
        {
          path: 'view',
          component:TechWorkOrderViewComponent,
          data: {
          title: 'View'
          }
        },
        {
          path: 'edit',
          component:TechWorkOrderEditComponent,
          data: {
          title: 'Edit'
          }
        },
        {
          path: 'completion',
          component:TechWorkOrderCompletionComponent,
          data: {
          title: 'Completion'
          }
        }
        ]
      },

     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechWorkOrderRoutingModule {}

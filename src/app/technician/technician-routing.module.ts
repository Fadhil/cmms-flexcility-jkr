import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechWorkRequestComponent } from './tech-work-request/tech-work-request.component';
import { TechWorkOrderComponent } from './tech-work-order/tech-work-order.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: 'workorder',
        component: TechWorkOrderComponent,
        loadChildren: './tech-work-order/tech-work-order.module#TechWorkOrderModule'
      },
      {
        path: 'workrequest',
        component: TechWorkRequestComponent,
        loadChildren: './tech-work-request/tech-work-request.module#TechWorkRequestModule'
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicianRoutingModule {}

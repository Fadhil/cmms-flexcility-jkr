import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechWorkRequestComponent } from './tech-work-request/tech-work-request.component';
import { TechWorkOrderComponent } from './tech-work-order/tech-work-order.component';
import { TechDashboardComponent } from './tech-dashboard/tech-dashboard.component';

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
      },
      {
        path: 'dashboard',
        component: TechDashboardComponent,
        data: {
          title: 'Dashboard'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicianRoutingModule {}

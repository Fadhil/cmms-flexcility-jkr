import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';

import { HelpdeskDashboardComponent } from './helpdesk-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HelpdeskDashboardComponent,
    data: {
      title: 'Helpdesk Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpdeskDashboardRoutingModule {}
/**
 * Created by fadhil on 18/05/2017.
 */

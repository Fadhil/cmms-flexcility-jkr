import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminWsCalendarComponent } from './admin-ws-calendar/admin-ws-calendar.component';
import { AdminWsListComponent } from './admin-ws-list/admin-ws-list.component';
import { AdminWsNewComponent } from './admin-ws-new/admin-ws-new.component';
import { AdminWsViewComponent } from './admin-ws-view/admin-ws-view.component';
import { AdminWsEditComponent } from './admin-ws-edit/admin-ws-edit.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: 'calendar',
        component: AdminWsCalendarComponent,
        data: {
          title: 'Calendar'
        }  
      },
      {
        path: 'list',
        component:AdminWsListComponent,
        data: {
          title:'List'
        }
      },
      {
        path: 'new',
        component: AdminWsNewComponent,
        data: {
          title: 'new'
        }
      },
      {
        path: 'view',
        component: AdminWsViewComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'edit',
        component: AdminWsEditComponent,
        data: {
          title: 'Edit'
        }
      }
 
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminWorkScheduleRoutingModule {}

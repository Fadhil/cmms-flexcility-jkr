import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTeamHomeComponent } from './admin-team-home/admin-team-home.component';
import { AdminTeamNewComponent } from './admin-team-new/admin-team-new.component';
import { AdminTeamViewComponent } from './admin-team-view/admin-team-view.component';
import { AdminTeamEditComponent } from './admin-team-edit/admin-team-edit.component';




const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        component: AdminTeamHomeComponent,
        data: {
          title: 'Team'},
          children:[
          {
            path: 'new',
            component: AdminTeamNewComponent,
            data: {
                title: 'New'
            }
          },
          {
            path: 'view',
            component: AdminTeamViewComponent,
            data: {
              title: 'View'
            }
          },
          {
            path: 'edit',
            component: AdminTeamEditComponent,
            data: {
            title: 'Edit'
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
export class AdminTeamRoutingModule {}

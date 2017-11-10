
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUserNewComponent } from './admin-user-new/admin-user-new.component';
import { AdminUserHomeComponent } from './admin-user-home/admin-user-home.component';
import { AdminUserViewComponent } from './admin-user-view/admin-user-view.component';
import { AdminUserEditComponent } from './admin-user-edit/admin-user-edit.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        component: AdminUserHomeComponent,
        data:{
          title: 'user'
        },
     children: [
          {
            path: 'view',
            component: AdminUserViewComponent,
            data: {
            title: 'view'
            }
          },
          {
            path: 'new',
            component: AdminUserNewComponent,
            data: {
            title: 'new'
            }
          },
          {
            path: 'edit',
            component: AdminUserEditComponent,
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
export class AdminUserRoutingModule {}

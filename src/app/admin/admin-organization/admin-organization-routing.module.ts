import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminTraitsComponent } from './admin-traits/admin-traits.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Organization'
    },
    children: [
        {
        path: '',
        component: AdminListComponent,
        data: {
          title: ''
        }
      }, 
      {
        path: 'register',
        component: AdminRegisterComponent,
        data: {
          title: 'Register'
        }
      },
      {
        path: 'traits',
        component: AdminTraitsComponent,
        data: {
          title: 'Traits'
        }
      },
      {
        path: 'view',
        component: AdminViewComponent,
        data: {
          title: 'view'
        }
      },
      {
        path: 'edit',
        component: AdminEditComponent,
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
export class AdminOrganizationRoutingModule {}

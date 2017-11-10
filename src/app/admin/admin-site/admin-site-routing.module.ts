import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSiteComponent } from '../admin-site/admin-site.component';
import { AdminSiteNewComponent } from '../admin-site/admin-site-new/admin-site-new.component';
import { AdminSiteHomeComponent } from './admin-site-home/admin-site-home.component';
import { AdminSiteViewComponent } from './admin-site-view/admin-site-view.component';
import { AdminSiteEditComponent } from './admin-site-edit/admin-site-edit.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Site'
    },
    children: [
      {
        path: '',
        component: AdminSiteHomeComponent,
        data: {
          title: ''
        }
      }, 
      {
        path: 'new',
        component: AdminSiteNewComponent,
        data: {
          title: 'new'
        }
      },
      {
        path: 'view',
        component: AdminSiteViewComponent,
        data: {
          title: 'view'
        }
      },
      {
        path: 'edit',
        component: AdminSiteEditComponent,
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
export class AdminSiteRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAreaNewComponent } from './admin-area-new/admin-area-new.component';
import { AdminAreaViewComponent } from './admin-area-view/admin-area-view.component';
import { AdminAreaEditComponent } from './admin-area-edit/admin-area-edit.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Area'
    },
    children: [

      {
        path: 'new',
        component: AdminAreaNewComponent,
        data: {
          title: 'New'
        }
      },
      {
        path: 'view',
        component: AdminAreaViewComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'edit',
        component: AdminAreaEditComponent,
        data: {
          title: 'Edit'
        }
      }     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAreaRoutingModule {}

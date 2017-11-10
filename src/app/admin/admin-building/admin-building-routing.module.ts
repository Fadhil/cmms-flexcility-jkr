import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBuildingNewComponent } from './admin-building-new/admin-building-new.component';
import { AdminBuildingViewComponent } from './admin-building-view/admin-building-view.component';
import { AdminBuildingEditComponent } from './admin-building-edit/admin-building-edit.component';




const routes: Routes = [
  {
    path: '',
    data: {
      title: 'building'
    },
    children: [
  
      {
        path: 'new',
        component: AdminBuildingNewComponent,
        data: {
          title: 'New'
        }
      },
      {
        path: 'view',
        component: AdminBuildingViewComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'edit',
        component: AdminBuildingEditComponent,
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
export class AdminBuildingRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAssetHomeComponent } from './admin-asset-home/admin-asset-home.component';
import { AdminAssetNewComponent } from './admin-asset-new/admin-asset-new.component';
import { AdminAssetImportComponent } from './admin-asset-import/admin-asset-import.component';
import { AdminAssetViewComponent } from './admin-asset-view/admin-asset-view.component';
import { AdminAssetEditComponent } from './admin-asset-edit/admin-asset-edit.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
        {
        path: '',
        component: AdminAssetHomeComponent,
        data: {
          title: 'Asset'
        },
        children:[
          {
            path: 'new',
            component: AdminAssetNewComponent,
            data: {
              title: 'New'
            }
          },
          {
            path: 'import',
            component: AdminAssetImportComponent,
            data: {
              title: 'Import'
            }
          },
          {
            path: 'view',
            component: AdminAssetViewComponent,
            data: {
              title: 'View'
            }
          },
          {
            path: 'edit',
            component: AdminAssetEditComponent,
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
export class AdminAssetRoutingModule {}

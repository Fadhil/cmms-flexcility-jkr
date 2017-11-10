import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminAssetRoutingModule } from './admin-asset-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { AdminAssetHomeComponent } from './admin-asset-home/admin-asset-home.component';
import { AdminAssetNewComponent } from './admin-asset-new/admin-asset-new.component';
import { AdminAssetImportComponent } from './admin-asset-import/admin-asset-import.component';
import { AdminAssetViewComponent } from './admin-asset-view/admin-asset-view.component';
import { AdminAssetEditComponent } from './admin-asset-edit/admin-asset-edit.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    AdminAssetRoutingModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [AdminAssetHomeComponent, AdminAssetNewComponent, AdminAssetImportComponent, AdminAssetViewComponent, AdminAssetEditComponent]
})
export class AdminAssetModule { }
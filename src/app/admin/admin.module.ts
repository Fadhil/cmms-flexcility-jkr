import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { AdminOrganizationComponent } from './admin-organization/admin-organization.component';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { AdminAssetComponent } from './admin-asset/admin-asset.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminTeamComponent } from './admin-team/admin-team.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { AdminWorkRequestComponent } from './admin-work-request/admin-work-request.component';
import { AdminWorkOrderComponent } from './admin-work-order/admin-work-order.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AdminBuildingComponent } from './admin-building/admin-building.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { AdminDashboardWoWrComponent } from './admin-dashboard-wo-wr/admin-dashboard-wo-wr.component';
import { AdminWorkScheduleComponent } from './admin-work-schedule/admin-work-schedule.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    ChartsModule,
    AngularMultiSelectModule,
    AdminRoutingModule,
    ImageUploadModule.forRoot(),

  ],
  // tslint:disable-next-line:max-line-length
  declarations: [AdminOrganizationComponent, AdminSiteComponent, AdminAssetComponent, AdminUserComponent, AdminTeamComponent, AdminWorkRequestComponent, AdminWorkOrderComponent, AdminDashboardComponent, AdminBuildingComponent, AdminAreaComponent, AdminDashboardWoWrComponent, AdminWorkScheduleComponent ]
})
export class AdminModule { }
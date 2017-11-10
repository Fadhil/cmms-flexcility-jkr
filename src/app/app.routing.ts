
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { TechLayoutComponent } from './layouts/tech-layout/tech-layout.component';
import { HelpdeskLayoutComponent } from './layouts/helpdesk-layout/helpdesk-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EngineerLayoutComponent } from './layouts/engineer-layout/engineer-layout.component';
import { VendorLayoutComponent } from './layouts/vendor-layout/vendor-layout.component';
import { ManagerLayoutComponent } from './layouts/manager-layout/manager-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/welcome',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'helpdesk-dashboard',
        loadChildren: './helpdesk-dashboard/helpdesk-dashboard.module#HelpdeskDashboardModule'
      },
      {
        path: 'service-requisition',
        loadChildren: './service-requisition/service-requisition.module#ServiceRequisitionModule'
      },
      {
        path: 'work-requests',
        loadChildren: './work-request/work-request.module#WorkRequestModule'
      },
      {
        path: 'work-orders',
        loadChildren: './work-order/work-order.module#WorkOrderModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      }
    ] 
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './admin/admin.module#AdminModule'
      }
    ]
  },
  {
    path: 'accounts',
    component: SimpleLayoutComponent,
    data: {
      title: 'Accounts'
    },
    children: [

      {
        path: '',
        loadChildren: './accounts/accounts.module#AccountsModule',
      }
    ]
  },
  {
    path: 'client',
    component: ClientLayoutComponent,
    data: {
      title: 'Client'
    },
    children: [
      {
        path: '',
        loadChildren: './client/client.module#ClientModule'
      }
    ]
  },
  {
    path: 'tech',
    component: TechLayoutComponent,
    data: {
      title: 'Tech'
    },
    children: [
      {
        path: '',
        loadChildren: './technician/technician.module#TechnicianModule'
      }
    ]
  },
  {
    path: 'helpdesk',
    component: HelpdeskLayoutComponent,
    data: {
      title: 'Helpdesk'
    },
    children: [
      {
        path: '',
        loadChildren: './helpdesk/helpdesk.module#HelpdeskModule'
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [

      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule'
      }
    ]
  },
  {
    path: 'engineer',
    component: EngineerLayoutComponent,
    data: {
      title: ''
    },
    children: [

      {
        path: '',
        loadChildren: './engineer/engineer.module#EngineerModule'
      }
    ]
  },
  {
    path: 'vendor',
    component: VendorLayoutComponent,
    data: {
      title: ''
    },
    children: [

      {
        path: '',
        loadChildren: './vendor/vendor.module#VendorModule'
      }
    ]
  },
  {
    path: 'management',
    component: ManagerLayoutComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './management/management.module#ManagementModule'
      }
    ]
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

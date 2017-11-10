import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminWorkRequestHomeComponent } from './admin-work-request-home/admin-work-request-home.component';
import { AdminWorkRequestNewComponent } from './admin-work-request-new/admin-work-request-new.component';
import { AdminWorkRequestEditComponent } from './admin-work-request-edit/admin-work-request-edit.component';
import { AdminWorkRequestViewComponent } from './admin-work-request-view/admin-work-request-view.component';
import { AdminWorkRequestVerificationComponent } from './admin-work-request-verification/admin-work-request-verification.component';
import { AdminWrNewComponent } from './admin-wr-new/admin-wr-new.component';
import { AdminWrOpenComponent } from './admin-wr-open/admin-wr-open.component';
import { AdminWrVerifiedComponent } from './admin-wr-verified/admin-wr-verified.component';
import { AdminWrCancelledComponent } from './admin-wr-cancelled/admin-wr-cancelled.component';
import { AdminWrNewViewComponent } from './admin-wr-new-view/admin-wr-new-view.component';
import { AdminWrNewVerificationComponent } from './admin-wr-new-verification/admin-wr-new-verification.component';
import { AdminWrNewEditComponent } from './admin-wr-new-edit/admin-wr-new-edit.component';
import { AdminWrOpenViewComponent } from './admin-wr-open-view/admin-wr-open-view.component';
import { AdminWrOpenEditComponent } from './admin-wr-open-edit/admin-wr-open-edit.component';
import { AdminWrOpenVerificationComponent } from './admin-wr-open-verification/admin-wr-open-verification.component';
import { AdminWrVerifiedViewComponent } from './admin-wr-verified-view/admin-wr-verified-view.component';
import { AdminWrVerifiedAssignComponent } from './admin-wr-verified-assign/admin-wr-verified-assign.component';
import { AdminWrCancelledViewComponent } from './admin-wr-cancelled-view/admin-wr-cancelled-view.component';
import { AdminWrCancelledConfirmationComponent } from './admin-wr-cancelled-confirmation/admin-wr-cancelled-confirmation.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Work Request'
    },
    children: [
      {
        path: '',
        component: AdminWorkRequestHomeComponent,
        data: {
          title: ''
        },
        children:[
                  {
                    path: 'new',
                    component: AdminWorkRequestNewComponent,
                    data: {
                       title: 'New'
                      }
                  },
                  {
                    path: 'view',
                    component: AdminWorkRequestViewComponent,
                    data: {
                      title: 'View'
                    }
                  },
                  {
                    path: 'edit',
                    component: AdminWorkRequestEditComponent,
                    data: {
                     title: 'Edit'
                    }
                   },
                   {
                    path: 'verification',
                    component: AdminWorkRequestVerificationComponent,
                    data: {
                      title: 'Verfication'
                    }
                  }
        ]
      },
      {
        path: 'news',
        component: AdminWrNewComponent,
        data: {
          title: 'New'
        },
        children:[
                  {
                    path: 'view',
                    component: AdminWrNewViewComponent,
                    data: {
                      title: 'View'
                    }
                  },
                  {
                    path: 'edit',
                    component: AdminWrNewEditComponent,
                    data: {
                      title: 'Edit'
                    }
                  },
                  {
                    path: 'verification',
                    component: AdminWrNewVerificationComponent,
                    data: {
                      title: 'Verification'
                    }
                  }
                 ]
      },
      {
        path: 'open',
        component: AdminWrOpenComponent,
        data: {
          title: 'Open'
        },
        children:[
                  {
                    path: 'view',
                    component: AdminWrOpenViewComponent,
                    data: {
                      title: 'View'
                    }
                  },
                  {
                    path: 'edit',
                    component: AdminWrOpenEditComponent,
                    data: {
                      title: 'Edit'
                    }
                  },
                  {
                    path: 'verification',
                    component: AdminWrOpenVerificationComponent,
                    data: {
                      title: 'Verification'
                    }
                  }
        ]
      },
      {
        path: 'verified',
        component: AdminWrVerifiedComponent,
        data: {
          title: 'Verified'
        },
        children : [
                  {
                    path: 'view',
                    component: AdminWrVerifiedViewComponent,
                    data: {
                      title: 'View'
                    }
                  },
                  {
                    path: 'assign',
                    component: AdminWrVerifiedAssignComponent,
                    data: {
                      title: 'Assignment'
                    }
                  }
        ]
      },
      {
        path: 'cancelled',
        component: AdminWrCancelledComponent,
        data: {
          title: 'Cancelled'
        },
        children: [
        {
                    path: 'view',
                    component: AdminWrCancelledViewComponent,
                    data: {
                      title: 'View'
                    }
                  },
                  {
                    path: 'verification',
                    component: AdminWrCancelledConfirmationComponent,
                    data: {
                      title: 'Verification'
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
export class AdminWorkRequestRoutingModule {}

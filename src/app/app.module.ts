
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { LoggingService } from './logging.service';
import { HttpModule } from '@angular/http';
import { AllDataService } from './all-data';




// Routing Module
import { AppRoutingModule } from './app.routing';

import { AppConfig } from './app.config';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AlertComponent } from './shared/alert/alert.component';
import { ImageUploadModule } from 'angular2-image-upload';
import { AuthGuard } from './shared/guard/auth.guard';
import { AlertService, AuthenticationService, UserService } from './shared/services/index';
import { TechLayoutComponent } from './layouts/tech-layout/tech-layout.component';
import { HelpdeskLayoutComponent } from './layouts/helpdesk-layout/helpdesk-layout.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EngineerLayoutComponent } from './layouts/engineer-layout/engineer-layout.component';
import { VendorLayoutComponent } from './layouts/vendor-layout/vendor-layout.component';
import { ManagerLayoutComponent } from './layouts/manager-layout/manager-layout.component';



@NgModule({
  imports: [
    BrowserModule,
    AngularMultiSelectModule,
    ReactiveFormsModule,
    MultiselectDropdownModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    ImageUploadModule.forRoot(),
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(AllDataService),
    AppRoutingModule
   

  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    ClientLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    AlertComponent,
    TechLayoutComponent,
    HelpdeskLayoutComponent,
    AdminLayoutComponent,
    EngineerLayoutComponent,
    VendorLayoutComponent,
    ManagerLayoutComponent

],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
    },
    AppConfig,
    AuthGuard,
    AlertService,
    AuthenticationService,
    LoggingService

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

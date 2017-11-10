import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { AccountsRoutingModule } from './accounts-routing.module';

@NgModule({
  imports: [
    AccountsRoutingModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent

  ],
  exports: [
    FormsModule,
    HttpModule
  ]
})
export class AccountsModule { }

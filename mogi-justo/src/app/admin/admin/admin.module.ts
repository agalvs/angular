import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FormsModule } from '@angular/forms';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [LoginAdminComponent, AdminIndexComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class AdminModule { }

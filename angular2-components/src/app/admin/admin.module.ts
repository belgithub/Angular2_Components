import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routing.module';

import { AdminComponent, AdminDashboardComponent, ManageProductsComponent, ManageUsersComponent } from '.';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminDashboardComponent, ManageProductsComponent, ManageUsersComponent, AdminComponent]
})
export class AdminModule { }

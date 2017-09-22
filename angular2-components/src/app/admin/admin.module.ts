import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routing.module';
import { UsersModule } from './manage-users/manage-users.module'

import { AdminComponent, AdminDashboardComponent, ManageProductsComponent , NewProductReactiveFormComponent} from '.';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    UsersModule
  ],
  declarations: [AdminDashboardComponent, ManageProductsComponent,  AdminComponent, NewProductReactiveFormComponent]
})
export class AdminModule { }

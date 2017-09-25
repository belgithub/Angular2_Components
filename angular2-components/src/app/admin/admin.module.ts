import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin.routing.module';
import { UsersModule } from './manage-users/manage-users.module'

import { AdminComponent, AdminDashboardComponent, ManageProductsComponent , NewProductReactiveFormComponent} from '.';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AdminDashboardComponent, ManageProductsComponent,  AdminComponent, NewProductReactiveFormComponent]
})
export class AdminModule { }

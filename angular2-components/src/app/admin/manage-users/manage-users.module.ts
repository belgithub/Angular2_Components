import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Router, RouterModule } from '@angular/router';

import { ManageUsersComponent, UserListComponent, UserComponent, UserFormComponent, UsersPromiseService } from '.';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [UserListComponent, UserListComponent, UserComponent, UserFormComponent, ManageUsersComponent],
  providers: [UsersPromiseService]
})
export class UsersModule { }

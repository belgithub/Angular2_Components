import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { AdminComponent, AdminDashboardComponent, ManageProductsComponent,
         ManageUsersComponent, UserListComponent, UserFormComponent } from '.';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { 
            path: 'users',
            component: ManageUsersComponent,
            children: [
              { 
                path: 'list',
                component: UserListComponent
              },
              { 
                path: 'modify',
                component: UserFormComponent
              }
            ]
          },
          { 
            path: 'products',
             component: ManageProductsComponent 
          },
          { 
            path: '',
           component: AdminDashboardComponent 
          }
        ]
      }
    ]
  }
];

export let adminRouterComponents = [AdminComponent, AdminDashboardComponent,
           ManageProductsComponent, ManageUsersComponent, UserFormComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

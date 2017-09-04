import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanDeactivateGuard } from './guards/can-deactivate.guard';

import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';


const routes: Routes = [
  {
    path: 'cart-list',
    component: CartListComponent,
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [CanDeactivateGuard],
  exports: [RouterModule]
})
export class CartRoutingModule { }

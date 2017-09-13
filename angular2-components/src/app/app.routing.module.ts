import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CartItemComponent} from './cart/cart-item/cart-item.component';
import {CartListComponent} from './cart/cart-list/cart-list.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  // {
  //   path: 'list',
  //   component: CartListComponent
  // },
  {
    path: 'item',
    component: CartItemComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PageNotFoundComponent
  }
];

export let appRouterComponents = [PageNotFoundComponent, LoginComponent];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

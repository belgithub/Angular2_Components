import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: ProductsComponent
  // },
  {
    path: 'add',
    component: ProductFormComponent
  },
  {
    path: 'edit/:id',
    component: ProductFormComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { NewProductReactiveFormComponent } from './new-product-reactive-form/new-product-reactive-form.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: ProductsComponent
  // },
  {
    path: 'add',
    component: NewProductReactiveFormComponent
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

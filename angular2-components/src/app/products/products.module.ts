import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductPromiseService } from './services/product-promise.service';

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';

import { ProductRoutingModule } from './product.routing.module';
import { NewProductReactiveFormComponent } from './new-product-reactive-form/new-product-reactive-form.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  declarations: [ProductsComponent, ProductComponent, ProductFormComponent, NewProductReactiveFormComponent],
  providers: [ProductPromiseService]
})
export class ProductsModule { }

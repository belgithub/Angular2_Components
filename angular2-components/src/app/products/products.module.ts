import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPromiseService } from './services/product-promise.service';

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';

import { ProductRoutingModule } from './product.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ProductsComponent, ProductComponent, ProductFormComponent],
  providers: [ProductPromiseService]
})
export class ProductsModule { }

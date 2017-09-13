import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPromiseService } from './services/product-promise.service';

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductsComponent, ProductComponent],
  providers: [ProductPromiseService]
})
export class ProductsModule { }

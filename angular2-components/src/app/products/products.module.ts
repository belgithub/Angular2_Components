import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPromiseService } from './services/product-promise.service';

import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductsComponent],
  providers: [ProductPromiseService]
})
export class ProductsModule { }

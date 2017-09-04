import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { CartRoutingModule } from './cart.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CartRoutingModule
  ],
  declarations: [
    CartListComponent,
    CartItemComponent,
    OrderByPipe
  ],
  exports: [
    CartListComponent,
     CartItemComponent
    ]

})
export class CartModule { }

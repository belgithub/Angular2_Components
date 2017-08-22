import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import { Cart } from '../cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  
  lastItemfromCart: Cart;
  cart: Array<Cart>;
  color:string = 'red';

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit() {
    console.log('cart-list.component - has been initialized')
   }
}

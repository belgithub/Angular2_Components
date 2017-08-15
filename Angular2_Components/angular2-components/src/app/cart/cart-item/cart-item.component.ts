import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import { Cart } from '../cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  lastItemfromCart: Cart;
  cart: Array<Cart>;

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit() {
    this.lastItemfromCart = this.cartService.getItem();
    this.cart = this.cartService.cart;
  }
}

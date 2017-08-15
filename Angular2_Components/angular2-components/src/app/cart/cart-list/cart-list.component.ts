import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import { Cart } from '../cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  
  boughtGood: Cart;
  boughtGoods: Array<Cart>;

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit() {
    this.boughtGood = this.cartService.getItem();
    this.boughtGoods = this.cartService.getCart();
  }
  clearCart (){
    this.boughtGoods = [];
  }
}

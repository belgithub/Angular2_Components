import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import { Cart } from '../cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  boughtGoods: Array<Cart>;
  lastBoughtGood: Cart;

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit() {
    this.boughtGoods = this.cartService.getCart();
    this.lastBoughtGood = this.cartService.getLastItem(this.boughtGoods);
  }
   
  addQuantity(){
     this.lastBoughtGood.quantity +=  1;
  }
  
  removeQuantity(){
    (this.lastBoughtGood.quantity >= 1) ?  this.lastBoughtGood.quantity -= 1 : this.lastBoughtGood.quantity=0;
  }

}

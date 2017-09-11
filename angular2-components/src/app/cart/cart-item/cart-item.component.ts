import { Component, OnInit, OnDestroy, HostBinding, HostListener } from '@angular/core';

import { CartService } from '../services/cart.service';
import { Cart } from '../cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, OnDestroy {
  lastItemfromCart: Cart;
  cart: Array<Cart>;
  display = true;

  @HostBinding('class') class = 'my-class';
  @HostListener('click', ['$event']) clicked(event) {
    console.log('click on host component > ');
    console.log(event.target);
  }

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit() {
    console.log('cart-item.component - has been initialized');
  }

  ngOnDestroy() {
    console.log('cart-list.component - has been destroyed');
  }

  toggle(){
    this.display = ! this.display;
  }

  console() {
    console.log("!!!");
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DialogService } from './../../services/dialog.service';
import { CartService } from '../cart.service';
import { Cart } from '../cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {

  lastItemfromCart: Cart;
  cart: Array<Cart>;
  color:string = 'red';
  toggle = true;
  selectedColumn = 'price';
  keys = ['price', 'quantity'];
  firstUpdateDate = new Date();

  constructor(
    public cartService: CartService,
    private dialogService: DialogService
  ) { }

  changeSelectedColumn($event) {
    this.selectedColumn = $event;
  }
  ngOnInit() {
    console.log('cart-list.component - has been initialized');
  }


  toggleSorting() {
    this.toggle = !this.toggle;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.firstUpdateDate === this.cartService.getLastUpdateDate()) {
      return true;
    }
    return this.dialogService.confirm('Discard changes?');
  }
}

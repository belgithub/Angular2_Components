import { Injectable } from '@angular/core';

import { Cart } from '../cart.model';

@Injectable()
export class CartService {


  constructor() { }

  cart = this.getCart();
  keys = this.getKeys();
  lastUpdateDate = new Date();
  firstUpdateDate = new Date();

  getCart(): Array<Cart> {
    return [
      new Cart (1, 'bike', 500, 'SportGoods', true, 'Top level XC bike', 1),
      new Cart (2, 'tire', 40, 'SportGoods > Bike parts', true, 'Tires for 29` xc bike, fast and duraleble', 2),
      new Cart (3, 'tube', 4, 'SportGoods > Bike parts', true, 'Some good tubes', 4),
      new Cart (4, 'helmet', 74, 'SportGoods > accesories', true, 'light, strong and aerodynamic', 1),
      new Cart (5, 'gloves', 5, 'SportGoods > wear', true, 'brand new gloves', 1),
      new Cart (6, 'A', 5, 'SportGoods > wear', true, 'brand new gloves', 1),
    ]
  }

  getItem() {
    return new Cart (1, 'bike', 500, 'SportGoods', true, 'Top level XC bike', 1)
  }

  getLastItem() {
    return this.cart[this.cart.length - 1];
  }

  getSelected(){
    for (let i of this.cart){
      if (i.selected) {
        return i;
      }
    }
  }

  getKeys(){
    let arr = [];
    for(let k in this.cart[0]){
      arr.push(k)
      return arr;
    }
  }

  getLastUpdateDate(){
    return this.lastUpdateDate;
  }

  getFirstUpdateDate(){
    return this.firstUpdateDate;
  }

   addQuantity(){
     this.getSelected().quantity +=  1;
     this.setLastUpdateDate();
     
  }

   removeQuantity(){
    (this.getSelected().quantity >= 1) ? this.getSelected().quantity -= 1 
                                       : this.getSelected().quantity = 0;
    this.setLastUpdateDate();
     
  }

  clearCart() {
    this.cart = [];
    this.setLastUpdateDate();
  }

  setDefaultCart() {
    this.cart = this.getCart();
    this.setLastUpdateDate();
  }

   setLastUpdateDate(){
    this.lastUpdateDate = new Date();
  }

  removeLastItem(){
    this.cart.pop();
    this.setLastUpdateDate();
  }
  

  removeSelected(){
    this.cart = this.cart.filter(function(el) {return  el.selected != true});
    this.setLastUpdateDate();
  }

  getTotalPrice() {
    let sum = 0;
    for (let i of this.cart){
      (i.quantity >= 1) ? (sum+= i.price * i.quantity): sum+=0;
    }
    return sum;
  }
  
  highLight(i){
   this.cart[i].highlighted  = !this.cart[i].highlighted;
  }

  setSelected(i){
    this.cart[i].selected = !this.cart[i].selected;
    for (let a of this.cart ) {
      (a.selected == true && a != this.cart[i]) && (a.selected = !a.selected);
    }
  }
}

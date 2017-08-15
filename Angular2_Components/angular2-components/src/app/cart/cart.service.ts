import { Injectable } from '@angular/core';

import { Cart } from './cart.model';

@Injectable()
export class CartService {


  constructor() { }


  getCart(): Array<Cart> {
    return [
      new Cart (1, 'bike', 500, 'SportGoods', true, 'Top level XC bike', 1),
      new Cart (2, 'tire', 40, 'SportGoods > Bike parts', true, 'Tires for 29` xc bike, fast and duraleble', 2),
      new Cart (3, 'tube', 4, 'SportGoods > Bike parts', true, 'Some good tubes', 4),
      new Cart (4, 'helmet', 70, 'SportGoods > accesories', true, 'light, strong and aerodynamic', 1),
      new Cart (5, 'gloves', 5, 'SportGoods > wear', true, 'gloves', 1),                        
    ]
  }

  getItem() {
    return new Cart (1, 'bike', 500, 'SportGoods', true, 'Top level XC bike', 1)
  }

  getLastItem(cart) {
    return cart[cart.length - 1];
  }

}

import { Component } from '@angular/core';

import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Angular2 Components Demo';

    constructor(
    public cartService: CartService
  ) { }
}

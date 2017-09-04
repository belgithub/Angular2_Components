import { Component, OnInit, ViewChild  } from '@angular/core';

import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Angular2 Components Demo';
  display = true;

    constructor(
    public cartService: CartService
  ) { }
  
  ngOnInit() {
    console.log('app.component - has been initialized')
   }
   onActivate($event) {
    console.log('Activated Component', $event);
  }

  onDeactivate($event) {
    console.log('Deactivated Component', $event);
  }

  toggle(){
    this.display = ! this.display;
    
  }
}

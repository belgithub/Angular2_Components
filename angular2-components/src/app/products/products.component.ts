import { Component, OnInit } from '@angular/core';

import { Product } from './models/product.model';

import { ProductPromiseService } from './services/product-promise.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Product>;

  constructor(
    private productPromiseService: ProductPromiseService
  ) { }

  ngOnInit() {
    this.productPromiseService.getTasks()
      .then(producs => this.products = producs)
      .catch((err) => console.log(err));
}


}

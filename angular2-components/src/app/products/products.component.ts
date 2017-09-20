import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

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
    private productPromiseService: ProductPromiseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productPromiseService.getProducts()
      .then(producs => this.products = producs)
      .catch((err) => console.log(err));

      console.log( this.productPromiseService.getProducts());
  }

  goNewProductForm(): void {
    console.log("Add new proudct button clicked.")
    this.router.navigate(['/products']);
  }
  
}

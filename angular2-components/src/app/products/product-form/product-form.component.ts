import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Product } from '../models/product.model';

import { ProductPromiseService } from '../services/product-promise.service';


@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy  {
  product: Product;

  constructor(
    private productPromiseService: ProductPromiseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.product = new Product(null, '', 0, '');

    this.route.params
    .switchMap((params: Params) => this.productPromiseService.getProduct(+params['id']))
    .subscribe(
      task => this.product = Object.assign({}, task),
      err => console.log(err)
    );
  }

  ngOnDestroy(): void {
  }

  saveTask() {
    const product = new Product(
      this.product.id,
      this.product.name,
      this.product.price,
      this.product.category
    );

    if (product.id) {
      this.productPromiseService.updateProduct(product);
    }
    // else {
    //   this.productPromiseService.addPoduct(product);
    // }

    this.goBack();
  }


  goBack(): void {
    this.router.navigate(['/home']);
  }
}

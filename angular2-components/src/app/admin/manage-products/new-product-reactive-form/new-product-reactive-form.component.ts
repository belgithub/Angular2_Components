import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Product } from '../../../products/models/product.model';
import { ProductPromiseService } from '../../../products/services/product-promise.service';

@Component({
  templateUrl: 'new-product-reactive-form.component.html',
  styleUrls: ['new-product-reactive-form.component.css'],
})
export class NewProductReactiveFormComponent implements OnInit, OnDestroy {
  product: Product;
  oldProduct: Product;
  private sub: Subscription;

  constructor(
    private productsService: ProductPromiseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.product = new Product(null, '', null, null, null, null, null);

    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];

      // NaN - for new product, id - for edit
      if (id) {
        this.productsService.getProduct(id)
          .then(prouduct => {
            this.product = Object.assign({}, prouduct);
            this.oldProduct = prouduct;
          })
          .catch((err) => console.log(err));
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  saveProduct() {
    let product = new Product(
      this.product.id,
      this.product.name,
      this.product.price,
      this.product.category
    );

    if (product.id) {
      this.productsService.updateProduct(product);
      // if success
      this.oldProduct = this.product;
    }
    // else {
    //   this.productsService.addProduct(product);
    //   // if success
    //   this.oldProduct = this.product;
    // }
  }

  goBack(): void {
    this.router.navigate(['admin/'])
  }
}

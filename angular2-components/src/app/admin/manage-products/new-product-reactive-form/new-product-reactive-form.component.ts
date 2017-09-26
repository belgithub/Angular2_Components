import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms';

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
  productForm: FormGroup;
  private sub: Subscription;

  constructor(
    private productsService: ProductPromiseService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
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

    this.buildForm();
    // this.createForm();
    // this.setFormValues();
    // this.patchFormValues();

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  save() {
    console.log(this.productForm);
    console.log(`Saved: ${JSON.stringify(this.productForm.value)}`);
  }

  returnShowAll () {
    return (this.productForm.get('showAll').toString() == 'No') ? false : true;
  }


  private buildForm() {
    this.productForm = this.fb.group({
      id: [{value: 'Autoincrement', disabled: true}, [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', [Validators.required, Validators.maxLength(25)]],
      price: [1, [Validators.required, Validators.min(1)]],
      isAvailable: [true, [Validators.required]],
      quantity: [1, [Validators.min(1)]],
      selected: [{value: false, disabled: true}, [Validators.required]],
      highlighted: [{value: false, disabled: true}, [Validators.required]],
      showAll: 'No'
    });
  }

  private createForm() {
    this.productForm = new FormGroup({
      name: new FormControl(),
      category: new FormControl(),
      price: new FormControl()
    });
  }


  private setFormValues() {
    this.productForm.setValue({
      name: 'laptop',
      category: 'it',
      price: '1000',
    });
  }

  private patchFormValues() {
    this.productForm.patchValue({
      name: 'Bike',
      category: 'sport'
    });
  }

  goBack(): void {
    this.router.navigate(['admin/products'])
  }
}

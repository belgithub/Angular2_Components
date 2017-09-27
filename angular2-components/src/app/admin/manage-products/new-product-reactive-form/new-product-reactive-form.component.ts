import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { Product } from '../../../products/models/product.model';
import { ProductPromiseService } from '../../../products/services/product-promise.service';
import { CustomValidators } from './../validators';


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


  private buildForm() {
    this.productForm = this.fb.group({
      id: [{value: 'Autoincrement', disabled: true}, [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', [Validators.required, Validators.maxLength(25)]],
      price: [1, [Validators.required, CustomValidators.price]],
      isAvailable: [true, [Validators.required]],
      quantity: [1, [Validators.min(1)]],
      selected: [{value: false, disabled: true}, [Validators.required]],
      highlighted: [{value: false, disabled: true}, [Validators.required]],
      showAll: 'false'
    });
  }

  allowQuantity() {
    const quantityFormControl = this.productForm.get('quantity');
    console.log( 'allowQuantity function called' );
    // if (this.productForm.get('isAvailable').value == 'Yes')
    console.log(this.productForm.get('isAvailable').value);
    if (this.productForm.get('isAvailable').value === 'true') {
      quantityFormControl.clearValidators();
      quantityFormControl.enable();
      quantityFormControl.patchValue(1);
      quantityFormControl.setValidators([Validators.required, Validators.min(1)]);
    } else {
      quantityFormControl.clearValidators();
      quantityFormControl.setValue(0);
      quantityFormControl.disable();

    }
    quantityFormControl.updateValueAndValidity();
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

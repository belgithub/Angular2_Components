import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { Product } from './../models/product.model';
import { ProductRoutingModule } from '../product.routing.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()  product: Product;
  @Output() onComplete = new EventEmitter<Product>();

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  completeProduct(event: any): void {
    this.onComplete.emit(this.product);
  }

  editProduct() {
    const link = ['/edit', this.product.id];
    this.router.navigate(link);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { Product } from './../models/product.model';

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

  completeTask(event: any): void {
    this.onComplete.emit(this.product);
  }

  editTask() {
    const link = ['/edit', this.product.id];
    this.router.navigate(link);
  }
}
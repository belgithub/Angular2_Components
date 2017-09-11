import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import './../../services/rxjs-extensions';

import { Product } from '../models/product.model';

@Injectable()
export class ProductPromiseService {
  private tasksUrl = 'http://localhost:3000/products';

  constructor(
    private http: Http
  ) {}

  getTasks(): Promise<Product[]> {
    return this.http.get(this.tasksUrl)
            .toPromise()
            .then( response => <Product[]>response.json())
            .catch(this.handleError);
  }
  
  getTask(id: number): Promise<Product> {
    return this.http.get(`${this.tasksUrl}/${id}`)
            .toPromise()
            .then( response => <Product>response.json() )
            .catch( this.handleError );
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

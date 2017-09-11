import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
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

  updateTask(product: Product): Promise<Product> {
    const url = `${this.tasksUrl}/${product.id}`,
        body = JSON.stringify(product),
        headers = new Headers({'Content-Type': 'application/json'}),
        options = new RequestOptions();

    options.headers = headers;

    return this.http.put(url, body, options)
            .toPromise()
            .then( response => <Product>response.json() )
            .catch( this.handleError );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

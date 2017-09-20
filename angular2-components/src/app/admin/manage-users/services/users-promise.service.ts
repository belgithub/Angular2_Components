import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import './../../../services/rxjs-extensions';

import { User } from './../models/user';

@Injectable()
export class UsersPromiseService {
  private productsUrl = 'http://localhost:3000/users';

  constructor(
    private http: Http
  ) {}

  getUsers(): Promise<User[]> {
    return this.http.get(this.productsUrl)
            .toPromise()
            .then( response => <User[]>response.json())
            .catch(this.handleError);
  }

  getUser(id: number): Promise<User> {
    return this.http.get(`${this.productsUrl}/${id}`)
            .toPromise()
            .then( response => <User>response.json() )
            .catch( this.handleError );
  }

  updateUser(product: User): Promise<User> {
    const url = `${this.productsUrl}/${product.id}`,
        body = JSON.stringify(product),
        headers = new Headers({'Content-Type': 'application/json'}),
        options = new RequestOptions();

    options.headers = headers;

    return this.http.put(url, body, options)
            .toPromise()
            .then( response => <User>response.json() )
            .catch( this.handleError );
  }

  // addUser(task: User): void {
  //   productList.push(task);
  // }

  addP(){
    console.log('Add new User has bene click. The functionality doesnt work yet.')
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
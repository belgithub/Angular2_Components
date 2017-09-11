import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import './../../services/rxjs-extensions';

import { Cart } from '../cart.model';

@Injectable()
export class TaskPromiseService {
  private tasksUrl = 'http://localhost:3000/products';

  constructor(
    private http: Http
  ) {}

  getTasks(): Promise<Task[]> {
    return this.http.get(this.tasksUrl)
            .toPromise()
            .then( response => <Task[]>response.json())
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}

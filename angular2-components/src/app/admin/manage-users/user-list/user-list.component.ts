import { Component, OnInit,OnDestroy  } from '@angular/core';

import { UsersPromiseService } from '../services/users-promise.service'

import { User } from '../models/user';



@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: Array<User>;

  constructor(
    private psersPromiseService: UsersPromiseService,
  ) { }

  ngOnInit() {
    this.psersPromiseService.getUsers()
      .then(users => this.users = users)
.catch((err) => console.log(err));
  }

  ngOnDestroy() {
  }
}

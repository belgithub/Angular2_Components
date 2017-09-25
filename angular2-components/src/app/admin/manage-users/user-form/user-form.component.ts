import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { User } from './../models/user';
import { UsersPromiseService } from './../services/users-promise.service';

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.css'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  user: User;
  oldUser: User;
  private sub: Subscription;

  constructor(
    private usersService: UsersPromiseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = new User(null, '', '', null, null, '', '');

    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];

      // NaN - for new user, id - for edit
      if (id) {
        this.usersService.getUser(id)
          .then(user => {
            this.user = Object.assign({}, user);
            this.oldUser = user;
          })
          .catch((err) => console.log(err));
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  saveUser() {
    let user = new User(
      this.user.id,
      this.user.firstName,
      this.user.lastName,
      this.user.addressType,
      this.user.sendProducts,
      this.user.country,
      this.user.city
    );

    if (user.id) {
      this.usersService.updateUser(user);
      // if success
      this.oldUser = this.user;
    } 
    // else {
    //   this.usersService.addUser(user);
    //   // if success
    //   this.oldUser = this.user;
    // }
  }

  goBack(): void {
    this.router.navigate(['admin/'])
    
  }
}

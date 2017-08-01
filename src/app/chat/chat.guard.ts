import { Injectable, } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import * as firebase from 'firebase/app';

@Injectable()
export class AppChatGuard implements CanActivate {

  user: firebase.User;

  constructor(private router: Router,) {

  }

  canActivate(): any {
    return this.user;
  }
}

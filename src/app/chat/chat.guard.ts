import { Injectable, } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AppChatGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.map((res: any) => {
      if (res) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    });
  }
}

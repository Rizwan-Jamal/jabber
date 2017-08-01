import { Injectable, } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AppLoginGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.map((res: any) => {
      if (res) {
        this.router.navigate(['/chat']);
        return false;
      }
      return true;
    });
  }
}

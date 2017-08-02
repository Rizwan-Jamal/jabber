import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppLoginComponent implements OnInit {

  loggingIn: boolean;

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
  }

  ngOnInit() {
    this.loggingIn = false;
  }

  login() {
    this.loggingIn = true;
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        this.loggingIn = false;
        this.router.navigate(['/chat']);
      }, (err) => {
        this.loggingIn = false;
        console.log(err);
      });
  }
}

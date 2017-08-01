import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class AppLoginComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        this.router.navigate(['/chat']);
      }, (err) => {
        console.log(err);
      });
  }
}

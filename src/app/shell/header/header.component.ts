import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
  }

  ngOnInit() {
    this.afAuth.authState
      .subscribe((user) => {
        this.isLoggedIn = !!user;
      });
  }

  logout() {
    this.afAuth.auth.signOut().then((res) => {
      this.router.navigate(['/login']);
    }, (err) => {
      console.log(err);
    });
  }
}

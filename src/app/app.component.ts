import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentMessage: string;
  user: firebase.User;
  messages: FirebaseListObservable<any[]>;
  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {}
  title = 'app';

  ngOnInit() {
     this.messages = this.db.list('/messages');
     this.afAuth.authState
      .subscribe((user) => this.user = user);
  }

  send() {
    this.messages.push({
      name: this.user.displayName,
      message: this.currentMessage
    }).then(() => this.currentMessage = '');
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}

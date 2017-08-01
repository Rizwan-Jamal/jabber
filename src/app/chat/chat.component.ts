import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class AppChatComponent implements OnInit {
  currentMessage: string;
  user: firebase.User;
  messages: FirebaseListObservable<any[]>;
  defaultPhotoUrl = 'https://lh5.googleusercontent.com/-lsE5oP8BaLo/AAAAAAAAAAI/AAAAAAAAA2s/mXF0lmSHJB8/photo.jpg';

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth,) {
  }

  ngOnInit() {
    this.messages = this.db.list('/messages');
    this.afAuth.authState
      .subscribe((user) => this.user = user);

    this.messages.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  send() {
    if (this.currentMessage) {
      this.messages.push({
        name: this.user.displayName,
        message: this.currentMessage,
        photoUrl: this.user.photoURL,
        id: this.user.uid,
        date: moment().valueOf()
      }).then(() => this.currentMessage = '');
    }
  }

  parseDate(date): string {
    return `${moment(date).fromNow()}`;
  }

  isMyChat(id: string): boolean {
    return id === this.user.uid;
  }
}

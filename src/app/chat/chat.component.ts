import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import * as moment from 'moment';

const scrollThreshold = 750 * 1.5;

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
  sendingMessage: boolean;

  @ViewChild('chatContainer') chatContainerElem: ElementRef;

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth,) {
  }

  ngOnInit() {
    this.sendingMessage = false;
    this.messages = this.db.list('/messages');

    this.afAuth.authState
      .subscribe((user) => this.user = user);

    this.messages.subscribe(() => {
      // Allow ngFor to do its work first
      setTimeout(() => {
        if (this.shouldScrollToBottom()) {
          this.scrollListToBottom();
        }
      });
    });
  }

  send() {
    if (this.currentMessage) {
      this.sendingMessage = true;
      this.messages.push({
        name: this.user.displayName,
        message: this.currentMessage,
        photoUrl: this.user.photoURL,
        id: this.user.uid,
        date: moment().valueOf()
      }).then(() => {
        this.sendingMessage = false;
        this.currentMessage = '';
      }, () => {
        this.sendingMessage = false;
        this.currentMessage = '';
      });
    }
  }

  parseDate(date): string {
    return `${moment(date).fromNow()}`;
  }

  isMyChat(id: string): boolean {
    return id === this.user.uid;
  }

  private shouldScrollToBottom(): boolean {
    return this.chatContainerElem.nativeElement.scrollTop === 0 ||
      this.chatContainerElem.nativeElement.scrollTop + (scrollThreshold) >= this.chatContainerElem.nativeElement.scrollHeight;
  }

  private scrollListToBottom(): void {
    this.chatContainerElem.nativeElement.scrollTop = this.chatContainerElem.nativeElement.scrollHeight;
  }
}

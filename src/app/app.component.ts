import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages: FirebaseListObservable<any[]>;
  constructor(
    private db: AngularFireDatabase
  ) {}
  title = 'app';

  ngOnInit() {
     this.messages = this.db.list('/messages');
  }

  send(message: string) {
    this.messages.push({
      name: 'Batman',
      message
    });
  }
}

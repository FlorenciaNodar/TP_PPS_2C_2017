import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserData {

  HAS_LOGGED_IN = 'hasLoggedIn';
  public user: any;
  
  constructor(
    public events: Events,
    public storage: Storage,
    public afdata: AngularFireDatabase,
    private af: AngularFireAuth
  ) {
    this.user = firebase.auth().currentUser;
  }

  login(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:login');
  };

  signup(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:signup');
  };

  logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  };

  setUsername(username: string): void {
    this.storage.set('username', username);
  };
  
  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };
  logoutFirebase() {
    firebase.auth().signOut().then((authData) => {
      console.log(authData);
      localStorage.removeItem('useremail');
    }).catch((error: any) => {
      console.log(error);
    });

  }
  public isLoggedIn(): boolean {
    let IsUserExists = localStorage.getItem('useremail') !== null ? true : false
    return IsUserExists;
  }
}

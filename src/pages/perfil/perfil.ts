import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/userdata/userdata';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  arch: any[] = [];

  constructor(public datosUser :UserData, public afdata: AngularFireDatabase,private af: AngularFireAuth ){
    this.infoUser();
  }
  infoUser(){
    this.af.authState.subscribe(authData => {
      if (authData) {
        this.afdata.object('users/' + authData.uid).subscribe(userData => {
          console.log(userData);
          this.arch = userData;
          localStorage.setItem('useremail', authData.email);
        });
      } else {
        
      }
    });
  }
}
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
//import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated"
import * as firebase from 'firebase/app';

@Injectable()
export class EncuestaDataProvider {

  constructor(public afAuth: AngularFireAuth, public afDB: AngularFireDatabase) {
    console.log('Hello EncuestaDataProvider Provider');
  }

  getEncuestas(){
    return this.afDB.list('Encuestas/');
  }

  saveEncuestaInFB(encuesta){
    return this.afDB.database.ref('Encuestas/').push(encuesta);
  }

  enviarEncuestaGuardadaFB(encuesta){
    return firebase.database().ref('Encuestas/' + encuesta.$key).update(encuesta);
  }  

}

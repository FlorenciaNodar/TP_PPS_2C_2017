import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
//import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated"
import * as firebase from 'firebase/app';

@Injectable()
export class EncuestaDataProvider {

  constructor(public afAuth: AngularFireAuth, public afDB: AngularFireDatabase) {
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
  
  eliminarEncuesta(encuesta){
    return this.afDB.database.ref('Encuestas/'+encuesta.$key).remove();
  }

  getProfesorLogeado(){
    return this.afDB.list('ProfesorMateria/');
  }

  enviarEncuestaRespuesta(respuesta){
    return this.afDB.database.ref('EncuestaRespuesta/').push(respuesta);
  }

  enviarEncuestaMateria(encuestaKey,materias){
    return this.afDB.database.ref('EncuestaMateria/'+encuestaKey).push(materias);
  }

  getMateriaAlumnos(){
    return this.afDB.list('MateriasAlumnos/');
  }
}

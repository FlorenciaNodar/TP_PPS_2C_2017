import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated"
import { DatePipe } from '@angular/common';
import * as firebase from 'firebase/app';

@Injectable()
export class AsistenciDataProvider {

  constructor(public afDB: AngularFireDatabase) {
  }

  getAulasMaterias(){
    return this.afDB.list('AulaMateriasOrig/');
  }

  getAulas(){
    return this.afDB.list('Aulas/');
  }

  getMaterias() {
    return this.afDB.list('Materias/4A');
  }

  getMateriasPorAula(aulaSelected){
    return this.afDB.list('AulaMateriasOrig/'+aulaSelected);
  }

  /*getMateriasPorAula(aulaSeleccionada){
    return this.afDB.list('Materias/'+aulaSeleccionada);
  }*/

  getAlumnos(){
    return this.afDB.list('Alumno/');
  }

  getAlumnosRelacionAulaMateria(aulaSeleccionada,materia){
    return this.afDB.list('Alumnos/'+aulaSeleccionada+'/'+materia);
  }

  registroAsistenciaDelDia(json){
    return this.afDB.database.ref('HistoricoAsistencias/').push(json);
  }

  getHistoricoAsistencias(){
    return this.afDB.list('HistoricoAsistencias/');
  }

}

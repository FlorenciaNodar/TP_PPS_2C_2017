import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated"
import { DatePipe } from '@angular/common';
import * as firebase from 'firebase/app';

@Injectable()
export class AsistenciDataProvider {

  constructor(public afDB: AngularFireDatabase) {
  }

  getAulas(){
    return this.afDB.list('Aulas/');
  }

  getMaterias() {
    return this.afDB.list('Materias/4A');
  }

  getMateriasPorAula(aulaSeleccionada){
    return this.afDB.list('Materias/'+aulaSeleccionada);
  }

  getAlumnosRelacionAulaMateria(aulaSeleccionada,materia){
    return this.afDB.list('Alumnos/'+aulaSeleccionada+'/'+materia);
  }

  guardarRegistroAsistenciaDelDia(aulaSeleccionada,materia,datePipe,listaAlumnos){
    return this.afDB.database.ref('HistoricoAsistencias/'+aulaSeleccionada+'/'+materia+'/'+datePipe).push(listaAlumnos);
  }

  getHistoricoAsistencias(){
    return this.afDB.list('HistoricoAsistencias/');
  }

}

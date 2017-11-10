import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated"
import * as firebase from 'firebase/app';

@Injectable()
export class AsistenciDataProvider {

  constructor(public afDB: AngularFireDatabase) {
    console.log('Hello AsistenciaProvider Provider');
  }

  getAulas(){
    return this.afDB.list("Aulas/");
  }

  getMaterias() {
    return this.afDB.list("Materias/4A");
  }

  getMateriasPorAula(aulaSeleccionada){
    return this.afDB.list("Materias/"+aulaSeleccionada);
  }

}

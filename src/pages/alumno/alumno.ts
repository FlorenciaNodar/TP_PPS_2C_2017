import { Component } from '@angular/core';
import { NavController,ModalController  } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { nuevoAlumno } from '../nuevoAlumno/nuevoAlumno';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";


import firebase from 'firebase';


@Component({
  selector: 'page-alumno',
  templateUrl: 'alumno.html'
})
export class Alumno {

  items: FirebaseListObservable<any[]>;
  nombre;
  apellido;
  nombreInsertado;
  apellidoInsertado;
  hola;
  constructor (public navCtrl: NavController, public af: AngularFireDatabase,public modalCtrl: ModalController) {

    this.items= af.list('/Alumno/');
  
  }
 ngOnInit() {
    
  }



delete(boca){
  this.af.list('/Alumno/').remove(boca.$key);
  this.ngOnInit();

}

 presentModal() {
    let modal = this.modalCtrl.create(nuevoAlumno);
    modal.present();
  }

}

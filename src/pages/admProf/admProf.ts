import { Component } from '@angular/core';
import { NavController,ModalController  } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { nuevoAdmProf } from '../nuevoAdmProf/nuevoAdmProf';
import { editarAlumno } from '../editarAlumno/editarAlumno';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";


import firebase from 'firebase';

@Component({
  selector: 'page-admProf',
  templateUrl: 'admProf.html'
})
export class AdmProf {
itemsAdm: FirebaseListObservable<any[]>;
itemsProf: FirebaseListObservable<any[]>;
nombre;
apellido;
nombreInsertado;
apellidoInsertado;
hola;
lista: any;
constructor (public navCtrl: NavController, public af: AngularFireDatabase,public modalCtrl: ModalController) {

  this.itemsAdm= af.list('/Administrativos/');
  this.itemsProf= af.list('/Profesores/');


}

presentModal(){
let modal = this.modalCtrl.create(nuevoAdmProf);
modal.present();
}
}
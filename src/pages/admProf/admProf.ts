import { Component } from '@angular/core';
import { NavController,ModalController, AlertController  } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { nuevoAdmProf } from '../nuevoAdmProf/nuevoAdmProf';
import { editarAdmProf } from '../editarAdmProf/editarAdmProf';
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
pet;
constructor (public navCtrl: NavController, public af: AngularFireDatabase,public modalCtrl: ModalController,public alertCtrl: AlertController) {

  this.itemsAdm= af.list('/Administrativos/');
  this.itemsProf= af.list('/Profesores/');
  this.pet = "puppies";



}
ngOnInit(){

}
presentModal(){
let modal = this.modalCtrl.create(nuevoAdmProf);
modal.present();
}

// deleteProf(boca){

// this.af.list('/Profesores/').remove(boca.$key);
// this.ngOnInit();
// }
deleteProf(boca) {
  let alert = this.alertCtrl.create({
    title: 'Borrar profesor',
    message: 'Está seguro que desea eliminar éste registro?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Aceptar',
        handler: () => {
          this.af.list('/Profesores/').remove(boca.$key);
          this.ngOnInit();
        }
      }
    ]
  });
  alert.present();
}


// delete(boca){

// this.af.list('/Administrativos/').remove(boca.$key);
// this.ngOnInit();
// }

delete(boca) {
  let alert = this.alertCtrl.create({
    title: 'Borrar administrativo',
    message: 'Está seguro que desea eliminar éste registro?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Aceptar',
        handler: () => {
          this.af.list('/Administrativos/').remove(boca.$key);
          this.ngOnInit();
        }
      }
    ]
  });
  alert.present();
}

modifyProf(boca){

var puesto = "PROFESOR";
let modal = this.modalCtrl.create(editarAdmProf, {lista:boca, puestoPersona: puesto });
modal.present();
}

modify(boca){
var puesto = "ADMINISTRATIVO";
let modal = this.modalCtrl.create(editarAdmProf, {lista:boca, puestoPersona: puesto});
modal.present();
}

}
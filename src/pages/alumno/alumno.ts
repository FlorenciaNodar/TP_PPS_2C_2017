import { Component } from '@angular/core';
import { NavController,ModalController, AlertController  } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { nuevoAlumno } from '../nuevoAlumno/nuevoAlumno';
import { editarAlumno } from '../editarAlumno/editarAlumno';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { modalAlumnos } from '../modalAlumnos/modalAlumnos';

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
lista: any;

constructor (public navCtrl: NavController, public af: AngularFireDatabase,public modalCtrl: ModalController,public alertCtrl: AlertController) {

  this.items= af.list('/Alumno/');

}
ngOnInit() {
  
}


delete(boca) {
  let alert = this.alertCtrl.create({
    title: 'Borrar alumno',
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
        this.af.list('/Alumno/').remove(boca.$key);
        this.ngOnInit();
        }
      }
    ]
  });
  alert.present();
}



// delete(boca){
// this.af.list('/Alumno/').remove(boca.$key);
// this.ngOnInit();
// }

presentModal() {
let modal = this.modalCtrl.create(nuevoAlumno);
modal.present();
}

modify(boca){
let modal = this.modalCtrl.create(editarAlumno, {lista:boca});
modal.present();
}

modal(){
  let modal = this.modalCtrl.create(modalAlumnos);
  modal.present();
}

}

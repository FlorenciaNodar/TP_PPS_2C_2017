import { Component } from '@angular/core';
import { NavController,ModalController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { nuevoAlumno } from '../nuevoAlumno/nuevoAlumno';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";


import firebase from 'firebase';


@Component({
  selector: 'page-editarAlumno',
  templateUrl: 'editarAlumno.html'
})
export class editarAlumno {

sexo:string;
sexoInsertado;
sexos: any;
options = [
{
  "name": "Femenino"
},
{
  "name": "Masculino"
}
];
lista:any;  

constructor (public navCtrl: NavController, public af: AngularFireDatabase,public modalCtrl: ModalController, public navParams: NavParams,public viewCtrl: ViewController) {
  let datos= this.navParams.get('lista'); 
  this.lista = datos;
  this.sexos= this.lista.sexo;

}

ngOnInit() {
  
}
onChange()
{
  this.sexo = this.sexos.name;
}


modify(lista:any, sexos){
 firebase.database().ref('/Alumno/' + lista.$key).set({
    nombre: lista.nombre,
    apellido: lista.apellido,
    dni: lista.dni,
    mail: lista.mail,
    fechaNacimiento: lista.fechaNacimiento,
    sexo: sexos.name
  });
this.ngOnInit();
this.dismiss();

}

dismiss() {
  this.viewCtrl.dismiss();
}

}
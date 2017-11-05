import { Component } from '@angular/core';
import { NavController,ModalController,ViewController, AlertController   } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";

import firebase from 'firebase';


@Component({
  selector: 'page-nuevoAlumno',
  templateUrl: 'nuevoAlumno.html'
})

export class nuevoAlumno {

    
items: Observable<any[]>;
nombre;
apellido;
fecha;
mail;
dni;
dniInsertado;
mailInsertado;
fechaInsertado;
nombreInsertado;
apellidoInsertado;
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

constructor (public navCtrl: NavController,public alertCtrl: AlertController, public af: AngularFireDatabase,public modalCtrl: ModalController,public viewCtrl: ViewController) {
}
ngOnInit() {
}


onChange()
{
  this.sexo = this.sexos.name;
}

addNewAlumn(){
    
  this.nombreInsertado = this.nombre;
  this.apellidoInsertado = this.apellido;
  this.fechaInsertado = this.fecha;
  this.mailInsertado = this.mail;
  this.sexoInsertado = this.sexo;
  this.dniInsertado = this.dni;

  if(this.nombreInsertado == "" || this.nombreInsertado==undefined||this.dniInsertado == "" || this.dniInsertado==undefined|| this.fechaInsertado==undefined || this.apellidoInsertado==undefined || this.apellidoInsertado == "" || this.sexoInsertado==undefined || this.sexoInsertado == "" || this.mailInsertado==undefined || this.mailInsertado == "" || this.fechaInsertado == "")
  {
  let alert = this.alertCtrl.create({
      title: 'ADVERTENCIA!',
      subTitle: 'Debe ingresar todos los campos!',
      buttons: ['OK']
    });
    alert.present();
  }else{
  this.af.list("/Alumno/").push({
  nombre: this.nombreInsertado,
  apellido: this.apellidoInsertado,
  fechaNacimiento: this.fechaInsertado,
  sexo: this.sexoInsertado,
  dni: this.dniInsertado,
  mail: this.mailInsertado
  });

  this.nombre = "";
  this.apellido= "";
  this.fecha = "";
  this.mail="";
  this.sexo ="";
  this.dni="";
  this.ngOnInit();
  }

}

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
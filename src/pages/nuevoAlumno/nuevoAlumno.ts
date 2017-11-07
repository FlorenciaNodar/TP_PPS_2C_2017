import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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


//Validaciones
rForm: FormGroup;
nome;
ape;
ma;
sexo1;
fecha1;
dni1;

constructor (public formbuilder: FormBuilder ,public navCtrl: NavController,public alertCtrl: AlertController, public af: AngularFireDatabase,public modalCtrl: ModalController,public viewCtrl: ViewController) {
this.nome = new FormControl();
this.ape = new FormControl();
this.ma = new FormControl();
this.sexo1 = new FormControl();
this.fecha1 = new FormControl();
this.dni1 = new FormControl();


this.rForm = formbuilder.group({
'nome': ['', Validators.compose([Validators.required, Validators.maxLength(25)])],
'ape': ['', Validators.compose([Validators.required, Validators.maxLength(25)])],
'ma': ['',Validators.compose([Validators.required, Validators.email])],
'sexo1': ['', Validators.required],
'fecha1': ['', Validators.required],
'dni1': ['', Validators.compose([Validators.required, Validators.maxLength(11)]) ]
});

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
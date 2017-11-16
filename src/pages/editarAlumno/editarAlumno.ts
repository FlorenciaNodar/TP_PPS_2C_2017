import { Component } from '@angular/core';
import { NavController,ModalController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { nuevoAlumno } from '../nuevoAlumno/nuevoAlumno';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import firebase from 'firebase';


@Component({
  selector: 'page-editarAlumno',
  templateUrl: 'editarAlumno.html'
})
export class editarAlumno {

sexo:string;
sexoInsertado;
sexos: any;
materia: string;
materias:any;
options = [
{
  "name": "Femenino"
},
{
  "name": "Masculino"
}
];

options2 =[
{
  "name": "Metodologia de Sistemas I"
},
{
  "name": "Base de Datos"
},
{
  "name": "Legislacion"
},
{
  "name":"Laboratorio IV"
},
{
  "name":"Practica Profesional"
},
{
   "name": "Programacion I"
},
{
  "name": "Sistemas de Procesamiento de Datos"
},
{
  "name": "Ingles I"
},
{
  "name": "Laboratorio I"
},
{
  "name": "Programacion III"
},
{
  "name": "Contabilidad"
},
{
  "name": "Empresarial"
},
{
  "name":"Investigacion operativa"
},
{
  "name":"Laboratorio III"
},
{
  "name": "Metodologia de la investigacion"
},
{
  "name": "Programacion II"
},
{
  "name": "Arquitectura y SO"
},
{
  "name":"Estadistica"
},
{
  "name":"Ingles II"
},
{
  "name":"Laboratorio II"
}
];
lista:any;  

//Validaciones
rForm: FormGroup;
nome;
ape;
ma;
sexo1;
fecha1;
materia1;
dni1;
constructor (public formbuilder: FormBuilder,public navCtrl: NavController, public af: AngularFireDatabase,public modalCtrl: ModalController, public navParams: NavParams,public viewCtrl: ViewController) {
let datos= this.navParams.get('lista'); 
this.lista = datos;
this.sexos= this.lista.sexo;
this.nome = new FormControl();
this.ape = new FormControl();
this.ma = new FormControl();
this.sexo1 = new FormControl();
this.fecha1 = new FormControl();
this.materia1 = new FormControl();
this.dni1 = new FormControl();


this.rForm = formbuilder.group({
'nome': ['', Validators.compose([Validators.required, Validators.maxLength(25)])],
'ape': ['', Validators.compose([Validators.required, Validators.maxLength(25)])],
'ma': ['',Validators.compose([Validators.required, Validators.email])],
'sexo1': ['', Validators.required],
'fecha1': ['', Validators.required],
'materia1': ['', Validators.required],
'dni1': ['', Validators.compose([Validators.required, Validators.maxLength(11)]) ]
});
}

ngOnInit() {
  
}
onChange()
{
  this.sexo = this.lista.sexo;
}

onChange2()
{
  this.materia = this.materias;
}


modify(lista:any){
 firebase.database().ref('/Alumno/' + lista.$key).set({
    nombre: lista.nombre,
    apellido: lista.apellido,
    legajo: lista.dni,
    mail: lista.mail,
    fechaNacimiento: lista.fechaNacimiento,
    sexo: lista.sexo,
    materia: lista.materia
  });
this.ngOnInit();
this.dismiss();

}

dismiss() {
  this.viewCtrl.dismiss();
}

}
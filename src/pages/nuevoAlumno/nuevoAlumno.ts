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
aulaInsertado;
materiaInsertado;
sexo:string;
sexoInsertado;
sexos: any;
aula: string;
aulas: any;
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

valores;

options1= [{
  "name": "1A"
},
{
  "name": "2C"
},
{
  "name": "3B"
},
{
  "name": "4A"
}];



//Validaciones
rForm: FormGroup;
nome;
ape;
ma;
sexo1;
fecha1;
dni1;
aula1;
materia1;
database;
hola;
constructor (public formbuilder: FormBuilder ,public navCtrl: NavController,public alertCtrl: AlertController, public af: AngularFireDatabase,public modalCtrl: ModalController,public viewCtrl: ViewController) {
this.nome = new FormControl();
this.ape = new FormControl();
this.ma = new FormControl();
this.sexo1 = new FormControl();
//this.aula1 = new FormControl();
this.materia1 = new FormControl();
this.fecha1 = new FormControl();
this.dni1 = new FormControl();


this.rForm = formbuilder.group({
'nome': ['', Validators.compose([Validators.required, Validators.maxLength(25)])],
'ape': ['', Validators.compose([Validators.required, Validators.maxLength(25)])],
'ma': ['',Validators.compose([Validators.required, Validators.email])],
'sexo1': ['', Validators.required],
//'aula1': ['', Validators.required],
'materia1': ['', Validators.required],
'fecha1': ['', Validators.required],
'dni1': ['', Validators.compose([Validators.required, Validators.maxLength(11)]) ]
});


// this.af.list("/AulaMaterias/").subscribe(e=>{
//   e.forEach(res=>{

//     if(res.nombreAula == aulas.name){

//     this.options2.push(res.nombreMateria);
//     }
//   })
// });

}
ngOnInit() {
}


onChange()
{
  this.sexo = this.sexos.name;
}


onChange1()
{
  this.aula = this.aulas;

  //this.buscarPorMateria(this.aula);
}

onChange2()
{
  this.materia = this.materias;
}

addNewAlumn(){
    
  this.nombreInsertado = this.nombre;
  this.apellidoInsertado = this.apellido;
  this.fechaInsertado = this.fecha;
  this.mailInsertado = this.mail;
  this.sexoInsertado = this.sexo;
  this.dniInsertado = this.dni;
  //this.aulaInsertado = this.aula;
  this.materiaInsertado = this.materia;

  if(this.nombreInsertado == "" ||this.aulaInsertado == "" ||this.materiaInsertado == "" || this.nombreInsertado==undefined||this.dniInsertado == "" || this.dniInsertado==undefined|| this.fechaInsertado==undefined || this.apellidoInsertado==undefined || this.apellidoInsertado == "" || this.sexoInsertado==undefined || this.sexoInsertado == "" || this.mailInsertado==undefined || this.mailInsertado == "" || this.fechaInsertado == "")
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
  legajo: this.dniInsertado,
  mail: this.mailInsertado,
   materia: this.materia
  });

  let alumnoAltaExcel = [];

  alumnoAltaExcel[0]=this.dni+';'+this.apellidoInsertado;
  alumnoAltaExcel[1]=this.nombreInsertado+';'+'Sabado  8:30 12:30';

  this.af.list("/listas/PPS -4A-2c2017").push(alumnoAltaExcel);

  this.nombre = "";
  this.apellido= "";
  this.fecha = "";
  this.mail="";
  this.sexo ="";
  this.dni="";
  this.aula= "";
  this.materia="";
  this.ngOnInit();
  }

}

dismiss() {
  this.viewCtrl.dismiss();
}

}
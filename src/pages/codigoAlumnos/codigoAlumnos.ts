import { Component } from '@angular/core';
import { NavController,ModalController, AlertController  } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { nuevoAlumno } from '../nuevoAlumno/nuevoAlumno';
import { editarAlumno } from '../editarAlumno/editarAlumno';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


import firebase from 'firebase';


@Component({
  selector: 'page-codigoAlumnos',
  templateUrl: 'codigoAlumnos.html'
})
export class CodigoAlumnos {

items: FirebaseListObservable<any[]>;
ref;
qrData = "Aula: 3C \n"+"Materias: \n"+"- Laboratorio 3,\n"+"- Programación 3,\n"+"- Matemática I,\n"+"- Base de Datos \n \n"+"Aula: 4C\n"+"Materias:\n"+"- Laboratorio 4,\n"+"- Programación 4,\n"+"- Investigación Operativa"
createdCode = null;
scannedCode = null;  
materias;
usuario;
constructor (private barcodeScanner: BarcodeScanner,public alertCtrl: AlertController ,public navCtrl: NavController, public af: AngularFireDatabase,public modalCtrl: ModalController) {
// this.items = af.list('/Materias/');

// this.ref = firebase.database().ref('/Materias/').child('3C').child('lab3');

// this.createdCode = this.items.$ref;
                
this.usuario=firebase.auth().currentUser.email;

this.createCode();
   console.log(this.createdCode);

}
createCode(){
this.createdCode = this.qrData;
}
ngOnInit() {
}

scanCode() {
this.barcodeScanner.scan().then(barcodeData => {
    this.ref = barcodeData.text;
        if(this.usuario == 'alumno@alumno.com' && this.scannedCode == this.createdCode){
            this.scannedCode = this.ref;
        }else{
              let alert = this.alertCtrl.create({
      title: 'ADVERTENCIA!',
      subTitle: 'Está queriendo scanear un código de alumno!',
      buttons: ['OK']
    });
    alert.present();
        }

}, (err) => {
    console.log('Error: ', err);
});
}
}
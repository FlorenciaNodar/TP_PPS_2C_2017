import { Component } from '@angular/core';
import { NavController,ModalController  } from 'ionic-angular';
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
qrData = "Aula: 3C - Materias: Laboratorio 3, Programación 3, Matemática I, Base de Datos" +
            "  Aula: 4C - Materias: Laboratorio 4, Programación 4, Investigación Operativa"
createdCode = null;
scannedCode = null;  
materias;
constructor (private barcodeScanner: BarcodeScanner,public navCtrl: NavController, public af: AngularFireDatabase,public modalCtrl: ModalController) {
// this.items = af.list('/Materias/');

// this.ref = firebase.database().ref('/Materias/').child('3C').child('lab3');

// this.createdCode = this.items.$ref;
                
  
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
    this.scannedCode = barcodeData.text;
}, (err) => {
    console.log('Error: ', err);
});
}
}
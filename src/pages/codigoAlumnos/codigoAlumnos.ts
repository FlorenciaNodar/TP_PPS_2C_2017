import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { nuevoAlumno } from '../nuevoAlumno/nuevoAlumno';
import { editarAlumno } from '../editarAlumno/editarAlumno';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';



import firebase from 'firebase';
import { RespuestaEncuestaHomePage } from '../respuesta-encuesta-home/respuesta-encuesta-home';
import { RespuestaEncuestaDetallePage } from '../respuesta-encuesta-detalle/respuesta-encuesta-detalle';


@Component({
    selector: 'page-codigoAlumnos',
    templateUrl: 'codigoAlumnos.html'
})
export class CodigoAlumnos {

    items: FirebaseListObservable<any[]>;
    ref;
    qrData = "Aula: 1A \n" + "Materias: \n" + "- Programación I - Sistemas de Procesamiento de Datos - Matemática - Inglés I - Laboratorio de Computación I \n" + "Aula: 2C \n" + "Materias: \n" + "- Programación II - Arquitectura y Sistemas Operativos - Estadística - Inglés II - Laboratorio de Computación II - Metodología de la Investigación \n" + "Aula: 3B\n" + "Materias:\n" + "- Programación III - Organización Contable de la Empresa - Organización Empresarial - Elementos de Investigación Operativa - Laboratorio de Computación III \n" + "Aula: 4A \n" + "Materias: \n" + "- Metodología de Sistemas I - Diseño y Administración de Bases de Datos - Legislación - Laboratorio de Computación IV - Práctica Profesional"
    qrEncuesta = "-KzaiULRvFrIW2P1YE7U";
    encuesta = null;
    createdCode = null;
    createdCodeAlumno = null;
    scannedCode = null;
    materias;
    usuario;
    existeEncuesta = false;
    public codigo1: string ="Aula: 1A \n"+"Materias: \n"+"- Programación I - Sistemas de Procesamiento de Datos - Matemática - Inglés I - Laboratorio de Computación I \n"+"Aula: 2C \n"+"Materias: \n"+"- Programación II - Arquitectura y Sistemas Operativos - Estadística - Inglés II - Laboratorio de Computación II - Metodología de la Investigación \n"+"Aula: 3B\n"+"Materias:\n"+"- Programación III - Organización Contable de la Empresa - Organización Empresarial - Elementos de Investigación Operativa - Laboratorio de Computación III \n";
    public codigo2: string ="Aula: 1A \n"+"Materias: \n"+"- Programación I - Sistemas de Procesamiento de Datos - Matemática - Inglés I - Laboratorio de Computación I \n"+"Aula: 3B\n"+"Materias:\n"+"- Programación III - Organización Contable de la Empresa - Organización Empresarial - Elementos de Investigación Operativa - Laboratorio de Computación III \n";
    constructor(private barcodeScanner: BarcodeScanner, public alertCtrl: AlertController, public navCtrl: NavController, public af: AngularFireDatabase, public modalCtrl: ModalController, public eDataProvider: EncuestaDataProvider) {
        // this.items = af.list('/Materias/');

        // this.ref = firebase.database().ref('/Materias/').child('3C').child('lab3');

        // this.createdCode = this.items.$ref;

        this.usuario = firebase.auth().currentUser.email;

        this.createCode();
        console.log(this.createdCode);

    }
    createCode() {
        //this.createdCode = this.qrData;
        this.createdCodeAlumno = this.qrData;
        this.createdCode = this.qrEncuesta;
    }
    ngOnInit() {
    }
    encodeText(Data){
        this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,Data).then((encodedData) => {
            
                    console.log(encodedData);
                    this.scannedCode = encodedData;
            
                }, (err) => {
                    console.log("Error occured : " + err);
        });               
    }
    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.ref = barcodeData.text;
            if (this.ref[0] == '-') {
                if (this.usuario == 'alumno@alumno.com') {
                    this.eDataProvider.getEncuestas().subscribe(encuestas => {
                        encuestas.forEach(encuesta => {
                            this.existeEncuesta=true;
                            if (encuesta.$key == this.ref && Date.now() > encuesta.finalizacion) {
                                let alert = this.alertCtrl.create({
                                    title: 'INFO!',
                                    subTitle: 'Finalizo el tiempo de respuesta para esta encuesta',
                                    buttons: ['aceptar']
                                });
                                alert.present();
                            } else {
                                if (encuesta.$key == this.ref && Date.now() < encuesta.finalizacion) {
                                    this.encuesta = encuesta;
                                    this.navCtrl.push(RespuestaEncuestaHomePage, { data: this.encuesta });
                                }
                            }
                        });
                    });
                    if(this.existeEncuesta == false){
                        let alert = this.alertCtrl.create({
                            title: 'INFO!',
                            subTitle: 'La encuesta no existe o quizas fue eliminada',
                            buttons: ['aceptar']
                        });
                        alert.present();
                    }
                } else if (this.usuario == "profesor@profesor.com") {
                    this.eDataProvider.getEncuestas().subscribe(encuestas => {
                        encuestas.forEach(encuesta => {
                            this.existeEncuesta=true;
                            if (encuesta.$key == this.ref) {
                                this.encuesta = encuesta;
                                this.navCtrl.push(RespuestaEncuestaDetallePage, { data: this.encuesta });
                            }
                        });
                    });
                }
                if(this.existeEncuesta == false){
                    let alert = this.alertCtrl.create({
                        title: 'INFO!',
                        subTitle: 'La encuesta no existe o quizas fue eliminada',
                        buttons: ['aceptar']
                    });
                    alert.present();
                }
            } 
            if (this.usuario == "profesor@profesor.com"  && barcodeData.text == this.codigo1) {
                let codigo = barcodeData.text;
                if (codigo == this.codigo1) {
                    this.encodeText(this.codigo1);
                }
                else {
                    let alert = this.alertCtrl.create({
                        title: 'ADVERTENCIA!',
                        subTitle: 'Está queriendo scanear un código de un profesor!',
                        buttons: ['OK']
                    });
                    alert.present();
                }
            }
            if (this.usuario == "profesor@profesor.com"  && barcodeData.text == this.codigo2) {
                let codigo = barcodeData.text;
                if (codigo == this.codigo2) {
                    this.encodeText(this.codigo2);
                }
                else {
                    let alert = this.alertCtrl.create({
                        title: 'ADVERTENCIA!',
                        subTitle: 'Está queriendo scanear un código de un profesor!',
                        buttons: ['OK']
                    });
                    alert.present();
                }
            }
            else {
                if (this.usuario == "alumno@alumno.com" && this.createdCodeAlumno == this.ref) {
                    this.scannedCode = this.ref;
                } else {
                    let alert = this.alertCtrl.create({
                        title: 'ADVERTENCIA!',
                        subTitle: 'Está queriendo scanear un código de alumno!',
                        buttons: ['OK']
                    });
                    alert.present();
                }
            }

        }, (err) => {
            console.log('Error: ', err);
        });
    }

}
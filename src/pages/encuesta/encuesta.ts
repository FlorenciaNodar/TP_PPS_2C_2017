import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated"
import { AngularFireAuth } from 'angularfire2/auth';
import { EncuestaEnviarPage } from '../encuesta-enviar/encuesta-enviar';
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-encuesta',
  templateUrl: 'encuesta.html',
})
export class EncuestaPage {  

  encuesta= { autor: '', enviada: false, preguntas: [{}], destinatarios: [{}]};

  opcionesSelect = [{valor:'1'}, {valor:'2'}, {valor:'3'}];
  
  creadorDelaEncuesta = '';

  public loginForm: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase,
  public alertCtrl: AlertController, public afAuth: AngularFireAuth, public modalCtrl: ModalController, 
  public eDataProvider: EncuestaDataProvider, public formBuilder: FormBuilder) {
    //this.creadorDelaEncuesta = this.getUser();
    //console.log(this.creadorDelaEncuesta);
   
  }

  getUser() {
    return this.afAuth.auth.currentUser.email;
  }

  trackByIndex(index: number, value: number) {
    return index;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestaPage');
    console.log(this.encuesta);
  }

  siguiente() {
    var jsonEncuesta = {encuesta: this.encuesta};
    /*let modal = this.modalCtrl.create(EncuestaEnviarPage,jsonEncuesta);
    modal.present();*/
    this.navCtrl.push(EncuestaEnviarPage,jsonEncuesta);
  }  

  agregarPregunta(){
    this.encuesta.preguntas.push({texto:''});
  }

  generarItemsOpciones(pregunta){
    console.log(JSON.stringify(pregunta));
    pregunta.opciones = [];
    for(var i=1; i<= pregunta.cantidadOpciones ; i++){
      pregunta.opciones.push("");
    }
  }

  eliminarPregunta(pregunta){
    var preguntasAux= [];
    this.encuesta.preguntas.forEach(preguntaItem=>{
      if(preguntaItem != pregunta){
        preguntasAux.push(preguntaItem);
      }
    })
    this.encuesta.preguntas = preguntasAux;
  }

   showAlertError(mensaje: string) {
    let alert = this.alertCtrl.create({
      title: 'ERROR!',
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }

  showAlerOK(mensaje: string) {
    let alert = this.alertCtrl.create({
      title: 'Info',
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }

}

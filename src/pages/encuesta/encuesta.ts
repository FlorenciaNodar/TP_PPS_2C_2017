import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated"
import { AngularFireAuth } from 'angularfire2/auth';
import { EncuestaEnviarPage } from '../encuesta-enviar/encuesta-enviar';
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-encuesta',
  templateUrl: 'encuesta.html',
})
export class EncuestaPage {

  encuesta = { autor: '', enviada: false, preguntas: [{}], destinatarios: [{}], fechaIngreso: '', fechaEgreso: '' };
  opcionesSelect = [{ valor: '1' }, { valor: '2' }, { valor: '3' }];
  creadorDelaEncuesta = '';

  public myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase,
    public alertCtrl: AlertController, public afAuth: AngularFireAuth, public modalCtrl: ModalController,
    public eDataProvider: EncuestaDataProvider, public formBuilder: FormBuilder) {
    //this.creadorDelaEncuesta = this.getUser();
    //console.log(this.creadorDelaEncuesta);   

    this.myForm = formBuilder.group({
      nombreEncuesta: ['', Validators.compose([Validators.required])],
      fechaIngreso: ['', Validators.compose([Validators.required])],
      fechaEgreso: ['', Validators.compose([Validators.required])],
      preguntaTexto: ['', Validators.compose([Validators.required])],
      tipoRespuesta: ['', Validators.compose([Validators.required])],
      cantidadOpciones: ['', Validators.compose([Validators.required])],
      opciones: ['', Validators.compose([Validators.required])],

    });


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
    if (this.encuesta.fechaEgreso <= this.encuesta.fechaIngreso) {
      this.showAlertError("La fecha de egreso debe ser mayor a la fecha de ingreso");
    } else {
      var jsonEncuesta = { encuesta: this.encuesta };
      this.navCtrl.push(EncuestaEnviarPage, jsonEncuesta);
    }
  }

  agregarPregunta() {
    // this.encuesta.preguntas.push({texto:''});
    this.encuesta.preguntas.push({ isOpen: false });

  }

  tipoRespuestaSelected(pregunta){
    if(pregunta.tipoRespuesta == 'OPINION'){
      pregunta.opciones= [];
    }else if (pregunta.tipoRespuesta == 'SI-NO'){
      pregunta.opciones= [];
    }
  }

  generarItemsOpciones(pregunta) {
    console.log(JSON.stringify(pregunta));
    pregunta.opciones = [];
    for (var i = 1; i <= pregunta.cantidadOpciones; i++) {
      pregunta.opciones.push("");
    }
  }

  eliminarPregunta(pregunta) {
    var preguntasAux = [];
    this.encuesta.preguntas.forEach(preguntaItem => {
      if (preguntaItem != pregunta) {
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

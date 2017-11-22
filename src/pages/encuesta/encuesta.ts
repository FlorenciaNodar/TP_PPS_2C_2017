import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated"
import { AngularFireAuth } from 'angularfire2/auth';
import { EncuestaEnviarPage } from '../encuesta-enviar/encuesta-enviar';
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@IonicPage()
@Component({
  selector: 'page-encuesta',
  templateUrl: 'encuesta.html',
})
export class EncuestaPage {

  encuesta = { nombreEncuesta: '', autor: '', respondida: false, enviada: false, preguntas: [{ isOpen: false, texto: '' }], destinatarios: [{}], fechaIngreso: ''};
  opcionesSelect = [{ valor: '1' }, { valor: '2' }, { valor: '3' }];
  cantidadOpcionesDisponiblesSelect = [{ valor: '1 a 2' }, { valor: '1 a 3' }];
  creadorDelaEncuesta = '';
  deshabilitar = false;
  modificar = false;
  seModifica = null;
  duracion = [{ valor: 5 },{ valor: 10 },{ valor: 15 },{ valor: 20 },{ valor: 25 },{ valor: 30 },{ valor: 35 },
              { valor: 40 },{ valor: 45 },{ valor: 50 },{ valor: 55 },{ valor: 60 }, ]
  public myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase,
    public alertCtrl: AlertController, public afAuth: AngularFireAuth, public modalCtrl: ModalController,
    public eDataProvider: EncuestaDataProvider, public formBuilder: FormBuilder, public datePipeCtrl: DatePipe) {
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

    this.seModifica = this.navParams.get('data');
    if(this.seModifica){
      this.encuesta = this.seModifica;
      this.modificar = true;
    }
  }

  getUser() {
    return this.afAuth.auth.currentUser.email;
  }

  trackByIndex(index: number, value: number) {
    return index;
  }

  ionViewDidLoad() {
  }

  siguiente() {
    var jsonEncuesta = { encuesta: this.encuesta , modificar: this.modificar};
    this.navCtrl.push(EncuestaEnviarPage, jsonEncuesta);
  }

  agregarPregunta() {
    // this.encuesta.preguntas.push({texto:''});
    //this.encuesta.preguntas.push({texto:'',isOpen: false });
    this.encuesta.preguntas.forEach(pregunta => {
      pregunta.isOpen = false;
    });
    this.encuesta.preguntas.push({ isOpen: false, texto: '' });

  }

  tipoRespuestaSelected(pregunta) {
    if (pregunta.tipoRespuesta == 'OPINION') {
      pregunta.opciones = [];
    } else if (pregunta.tipoRespuesta == 'UNASOLARESPUESTA') {
      pregunta.opciones = [];
    }
  }

  generarItemsOpciones(pregunta) {
    console.log(JSON.stringify(pregunta));
    pregunta.opciones = [];
    for (var i = 1; i <= pregunta.cantidadOpciones; i++) {
      pregunta.opciones.push("");
    }
  }

  generarItemsOpcionesParaUnaSolaRespuesta(pregunta) {
    console.log(JSON.stringify(pregunta));
    pregunta.opciones = [];
    if (pregunta.opcionesUnaSolaRespuesta == '1 a 2') {
      pregunta.opciones.push("", "");
    } else if (pregunta.opcionesUnaSolaRespuesta == '1 a 3') {
      pregunta.opciones.push("", "", "");
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

  validar() {
    if (this.encuesta.nombreEncuesta == "") {
      alert("Se deben completar el nombre de la encuesta")
    }

  }

}

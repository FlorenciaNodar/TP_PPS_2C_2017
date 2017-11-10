import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated"
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';
import { EncuestaDetallePage } from '../encuesta-detalle/encuesta-detalle';

@IonicPage()
@Component({
  selector: 'page-encuesta-enviar',
  templateUrl: 'encuesta-enviar.html',
})
export class EncuestaEnviarPage {

  encuesta = { enviada: false, destinatarios: [{}] };

  aulas = [{ descripcion: '4A' }, { descripcion: '4B' }, { descripcion: '4C' }, { descripcion: '4D' }];

  destinatarios = [{}];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public afDB: AngularFireDatabase, public alertCtrl: AlertController, public eDataProvider: EncuestaDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestaEnviarPage');
    this.encuesta = this.navParams.get('encuesta');
    console.log(this.encuesta);    
  }

  siguiente(){    
    this.encuesta.destinatarios = this.destinatarios;
    var jsonEncuesta = {encuesta: this.encuesta};
    this.navCtrl.push(EncuestaDetallePage,jsonEncuesta);
  } 


}

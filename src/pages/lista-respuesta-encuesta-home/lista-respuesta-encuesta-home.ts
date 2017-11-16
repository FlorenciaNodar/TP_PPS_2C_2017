import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RespuestaEncuestaHomePage } from '../respuesta-encuesta-home/respuesta-encuesta-home';

@IonicPage()
@Component({
  selector: 'page-lista-respuesta-encuesta-home',
  templateUrl: 'lista-respuesta-encuesta-home.html',
})
export class ListaRespuestaEncuestaHomePage {

  encuestasPendientes = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.encuestasPendientes = this.navParams.get('data');
    console.log(this.encuestasPendientes);
  }

  responderEncuesta(e){
    this.navCtrl.push(RespuestaEncuestaHomePage,{data: e});
  }

}

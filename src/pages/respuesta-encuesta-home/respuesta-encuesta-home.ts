import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';


@IonicPage()
@Component({
  selector: 'page-respuesta-encuesta-home',
  templateUrl: 'respuesta-encuesta-home.html',
})
export class RespuestaEncuestaHomePage {

  encuesta = [];

  resE = {encuesta: '', preguntasRespuestas: [{}]};

  encuestaKey: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eProvider: EncuestaDataProvider) {
  }

  ionViewDidLoad() {
    this.getEncuestas();
  }

  getEncuestas() {
    this.eProvider.getEncuestas().subscribe(res => {
      res.forEach(encuesta => {
        this.encuesta = encuesta;
        this.encuestaKey = encuesta.$key;
      })
    },error=>{
        console.log(error);
    });

    console.log(this.encuesta);
  }

  ngModelChange(pregunta,op){
    pregunta.opcionValue = op;
    console.log(op);
  }

  respuesta(){
    console.log(this.encuesta);
    this.eProvider.enviarEncuestaRespuesta(this.encuesta);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-respuesta-encuesta-home',
  templateUrl: 'respuesta-encuesta-home.html',
})
export class RespuestaEncuestaHomePage {

  encuesta = {$key: '', encuestaKey: ''};
  encuestaKey = '';
  encuestaOrigin = {respondida: false};
  opcionesSeleccionados = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public eProvider: EncuestaDataProvider,
  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.encuesta = this.navParams.get('data');
    this.encuestaOrigin = this.navParams.get('data');
    console.log(this.encuesta.$key);
  }

  ngModelChange(pregunta,isChecked,op){
    if(isChecked) {
      this.opcionesSeleccionados.push(op);
      pregunta.opcionValues = this.opcionesSeleccionados;
    } else {
      var index = this.opcionesSeleccionados.indexOf(op);
      if(index > -1){
        this.opcionesSeleccionados.splice(index,1);
        pregunta.opcionValues = this.opcionesSeleccionados;
      }
    }
  }

  enviarRespuesta(){
    try{  
      this.encuesta.encuestaKey = this.encuesta.$key;       
      this.eProvider.enviarEncuestaRespuesta(this.encuesta);
      this.encuestaOrigin.respondida = true;
      this.eProvider.actualizarEncuestaPorRespuesta(this.encuestaOrigin,this.encuesta.$key);
      this.showAlert('La respuesta se envio correctamente');
    }catch(e){
      this.showAlert(e);
    }
    
  }

  showAlert(mensaje: string) {
    let alert = this.alertCtrl.create({
      title: 'INFO!',
      subTitle: mensaje,
      buttons: [{
        text:'OK',
        handler:()=>{
          this.navCtrl.push(HomePage);
        }}]
    });
    alert.present();
  }

}

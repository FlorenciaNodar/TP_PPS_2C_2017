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

  encuesta = {$key: '', key: ''};
  encuestaKey = '';
  encuestaOrigin = {respondida: false};

  constructor(public navCtrl: NavController, public navParams: NavParams, public eProvider: EncuestaDataProvider,
  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.encuesta = this.navParams.get('data');
    this.encuestaOrigin = this.navParams.get('data');
    console.log(this.encuesta.$key);
  }

  ngModelChange(pregunta,op){
    pregunta.opcionValue = op;
  }

  enviarRespuesta(){
    try{  
      this.encuesta.key = this.encuesta.$key;       
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

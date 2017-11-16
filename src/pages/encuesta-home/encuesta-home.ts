import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';
import { AngularFireList } from 'angularfire2/database';
import { EncuestaPage } from '../encuesta/encuesta';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { EncuestaEnviarPage } from '../encuesta-enviar/encuesta-enviar';
import { DatePipe } from '@angular/common';
import { RespuestaEncuestaDetallePage } from '../respuesta-encuesta-detalle/respuesta-encuesta-detalle';


@IonicPage()
@Component({
  selector: 'page-encuesta-home',
  templateUrl: 'encuesta-home.html',
})
export class EncuestaHomePage {

  encuestas: FirebaseListObservable<any[]>;

  aulaMaterias = [];

  fechaActual: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public eDataProvider: EncuestaDataProvider,
  public modalCtrl: ModalController, public alertCtrl: AlertController, public datePipeCtrl: DatePipe) {

   this.encuestas = this.eDataProvider.getEncuestas();    

   this.fechaActual = this.datePipeCtrl.transform(Date.now(), 'yyyy-MM-dd');

   console.log(this.fechaActual);
   
  }

  enviarEncuesta(e){
    e.enviada=true;
    this.enviarEncuestaFB(e).then(res=>{
      this.showAlerOK("La encuesta se envio exitosamente");
    })
  }

  enviarEncuestaFB(e){
    return this.eDataProvider.enviarEncuestaGuardadaFB(e);
  }

  generarEncuesta(){
    this.navCtrl.push(EncuestaPage);
  }

  eliminarEncuesta(encuesta){
    console.log(encuesta.$key);
    this.eDataProvider.eliminarEncuesta(encuesta);
  }

  verEncuestaDetalle(){
    this.navCtrl.push(RespuestaEncuestaDetallePage);
  }

  showAlerOK(mensaje: string) {
    let alert = this.alertCtrl.create({
      title: 'Info',
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertError(mensaje: string) {
    let alert = this.alertCtrl.create({
      title: 'ERROR!',
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }

}

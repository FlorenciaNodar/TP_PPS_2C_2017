import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';
import { AngularFireList } from 'angularfire2/database';
import { EncuestaPage } from '../encuesta/encuesta';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { EncuestaEnviarPage } from '../encuesta-enviar/encuesta-enviar';

@IonicPage()
@Component({
  selector: 'page-encuesta-home',
  templateUrl: 'encuesta-home.html',
})
export class EncuestaHomePage {

  encuestas: FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public eDataProvider: EncuestaDataProvider,
  public modalCtrl: ModalController, public alertCtrl: AlertController) {

    this.encuestas = this.eDataProvider.getEncuestas();
    
    this.encuestas.forEach(e=>{
      console.log (e);
    })

  }

  enviarEncuesta(e){
    console.log(e);
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

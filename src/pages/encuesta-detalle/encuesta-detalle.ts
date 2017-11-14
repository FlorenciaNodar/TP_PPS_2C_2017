import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';
import { EncuestaHomePage } from '../encuesta-home/encuesta-home';

@IonicPage()
@Component({
  selector: 'page-encuesta-detalle',
  templateUrl: 'encuesta-detalle.html',
})
export class EncuestaDetallePage {

  encuesta = { respondida: false, nombreEncuesta: '', destinatarios: [{}], enviada: false };

  constructor(public navCtrl: NavController, public navParams: NavParams, public eDataProvider: EncuestaDataProvider,
  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.encuesta = this.navParams.get('encuesta');
    console.log(this.encuesta); 
  }

  enviarEncuesta(){
    this.enviarNewEncuestaYGuardar().then(res=>{
      //this.eDataProvider.enviarEncuestaMateria(this.encuesta,this.encuesta.destinatarios);
      this.showAlerOK("La encuesta se envio exitosamente");
      this.navCtrl.push(EncuestaHomePage);
    })
  }

  enviarNewEncuestaYGuardar() {
    this.encuesta.enviada = true;
    return this.eDataProvider.saveEncuestaInFB(this.encuesta);
  }

  guardarEncuesta(){    
    //this.encuesta.autor = this.creadorDelaEncuesta;
    this.encuesta.enviada = false;
    this.encuesta.respondida = false;
    this.saveEncuestaInFB().then(res=>{
      this.showAlerOK("La encuesta se guardo exitosamente");
      this.navCtrl.push(EncuestaHomePage);      
    })
  } 
  
  saveEncuestaInFB(){   
    return this.eDataProvider.saveEncuestaInFB(this.encuesta);
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

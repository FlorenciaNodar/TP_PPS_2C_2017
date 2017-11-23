import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';
import { EncuestaHomePage } from '../encuesta-home/encuesta-home';
import { DatePipe } from '@angular/common';


@IonicPage()
@Component({
  selector: 'page-encuesta-detalle',
  templateUrl: 'encuesta-detalle.html',
})
export class EncuestaDetallePage {

  encuesta = { respondida: false, nombreEncuesta: '', destinatarios: [{}], enviada: false, fechaIngreso:'' , duracion:0, finalizacion: 0};
  modificar = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eDataProvider: EncuestaDataProvider,
    public alertCtrl: AlertController, public datePipeCtrl: DatePipe) {
    this.modificar = this.navParams.get('modificar');
  }

  ionViewDidLoad() {
    this.encuesta = this.navParams.get('encuesta');
  }

  enviarEncuesta() {
    this.encuesta.finalizacion = Date.now() + (this.encuesta.duracion*60000);
    if (this.modificar) {
      this.eDataProvider.enviarEncuestaGuardadaFB(this.encuesta);
      this.showAlerOK("La encuesta se modifico e envio exitosamente");
      this.navCtrl.push(EncuestaHomePage);
    } else {
      let datePipe = this.datePipeCtrl.transform(Date.now(), 'dd-MM-yyyy');
      this.encuesta.fechaIngreso = datePipe;
      this.enviarNewEncuestaYGuardar().then(res => {
        //this.eDataProvider.enviarEncuestaMateria(this.encuesta,this.encuesta.destinatarios);
        this.showAlerOK("La encuesta se envio exitosamente");
        this.navCtrl.push(EncuestaHomePage);
      });
    }
  }

  enviarNewEncuestaYGuardar() {
    this.encuesta.enviada = true;
    return this.eDataProvider.saveEncuestaInFB(this.encuesta);
  }

  guardarEncuesta() {
    if (this.modificar) {
      this.eDataProvider.enviarEncuestaGuardadaFB(this.encuesta);
      this.showAlerOK("La encuesta se modifico y guardo exitosamente");
      this.navCtrl.push(EncuestaHomePage);
    } else {
      //this.encuesta.autor = this.creadorDelaEncuesta;
      let datePipe = this.datePipeCtrl.transform(Date.now(), 'dd-MM-yyyy');
      this.encuesta.fechaIngreso = datePipe;
      this.encuesta.enviada = false;
      this.encuesta.respondida = false;
      this.saveEncuestaInFB().then(res => {
        this.showAlerOK("La encuesta se guardo exitosamente");
        this.navCtrl.push(EncuestaHomePage);
      })
    }
  }

  saveEncuestaInFB() {
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

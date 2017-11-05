import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-encuesta',
  templateUrl: 'encuesta.html',
})
export class EncuestaPage {

  encuesta= { autor: '', enviada: '', preguntas:[{}]};

  opcionesSelect = [{valor:'1'}, {valor:'2'}, {valor:'3'}];
  
  creadorDelaEncuesta = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase,
  public alertCtrl: AlertController, public afAuth: AngularFireAuth) {
    //this.creadorDelaEncuesta = this.getUser();
    //console.log(this.creadorDelaEncuesta);
  }

  getUser() {
    return this.afAuth.auth.currentUser.email;
  }

  trackByIndex(index: number, value: number) {
    return index;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestaPage');
    console.log(this.encuesta);
  }

  guardarEncuesta(){    
    //this.encuesta.autor = this.creadorDelaEncuesta;
    this.encuesta.enviada = 'no'
    this.saveEncuestaInFB().then(res=>{
      this.showAlerOK("La encuesta se guardo exitosamente")
    })
  }

  enviarEncuesta(){
    //this.encuesta.autor = this.creadorDelaEncuesta;    
    this.encuesta.enviada = 'si';
    this.saveEncuestaInFB().then(res=>{
      this.showAlerOK("La encuesta se envio exitosamente")
    })
  }

  saveEncuestaInFB(){
    console.log(this.encuesta);
    return this.afDB.database.ref('Encuestas/').push(this.encuesta);
  }

  agregarPregunta(){
    this.encuesta.preguntas.push({texto:''});
  }

  generarItemsOpciones(pregunta){
    console.log(JSON.stringify(pregunta));
    pregunta.opciones = [];
    for(var i=1; i<= pregunta.cantidadOpciones ; i++){
      pregunta.opciones.push("");
    }
  }

  eliminarPregunta(pregunta){
    var preguntasAux= [];
    this.encuesta.preguntas.forEach(preguntaItem=>{
      if(preguntaItem != pregunta){
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

}

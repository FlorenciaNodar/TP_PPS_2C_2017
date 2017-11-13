import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated"
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';
import { EncuestaDetallePage } from '../encuesta-detalle/encuesta-detalle';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-encuesta-enviar',
  templateUrl: 'encuesta-enviar.html',
})
export class EncuestaEnviarPage {

  encuesta = { enviada: false, destinatarios: [{}] };
  //aulas = [{ descripcion: '4A' }, { descripcion: '4B' }, { descripcion: '4C' }, { descripcion: '4D' }];
  destinatarios = [];
  inhabilitar = true;

  profesorMaterias: FirebaseListObservable<any[]>;

  userLogeado = {};
  userProfesorMateria = {};
  materias = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public afDB: AngularFireDatabase, public alertCtrl: AlertController, public eDataProvider: EncuestaDataProvider,
    public storage: Storage, public afAuth: AngularFireAuth) {
      //console.log(this.destinatarios);
  }

  ionViewDidLoad() {
    this.encuesta = this.navParams.get('encuesta');
    this.userLogeado = this.getUser();
    
    this.eDataProvider.getProfesorLogeado().subscribe(res=>{
      console.log(res);
      res.forEach(e=>{
        if(e.email === this.userLogeado){
          this.materias = e.Materias;
        }
      });
    });
   //console.log(this.materias);    
  }

  getUser() {
    return this.afAuth.auth.currentUser.email;
  }

  getMateriasAsignadasProf(){
    if(this.userLogeado == 'profesor@profesor.com'){

    }
  }

  siguiente(){    
    this.encuesta.destinatarios = this.destinatarios;
    var jsonEncuesta = {encuesta: this.encuesta};
    this.navCtrl.push(EncuestaDetallePage,jsonEncuesta);
  } 

  verificarDestinatarios(): boolean{
    if(this.destinatarios.length > 0){
      this.inhabilitar=false;
      return false;
    }
    return true;
  }


}

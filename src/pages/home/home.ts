import { Component } from '@angular/core';
import { Platform, NavController, ModalController, AlertController } from 'ionic-angular';
import { AsistenciaModalPage } from '../asistencia-modal/asistencia-modal';
import { RespuestaEncuestaHomePage } from '../respuesta-encuesta-home/respuesta-encuesta-home';
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';
import { AngularFireAuth } from 'angularfire2/auth';
import{ Push, PushToken } from '@ionic/cloud-angular';
import firebase from 'firebase';
import { ListaRespuestaEncuestaHomePage } from '../lista-respuesta-encuesta-home/lista-respuesta-encuesta-home';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  materiasQueCursaAlumno = [];
  usuarioActual: string;
  encuestaAlumno = [];
  cont= 0;
  btnEncuestasPendientes=false;
 
  usuario;
  constructor(public platform: Platform,public navCtrl: NavController,public push: Push, public modalCtrl: ModalController,
    public alertCtrl:AlertController, public eProvider: EncuestaDataProvider, public afAuth: AngularFireAuth) {
        this.usuario=firebase.auth().currentUser.email;


    if (platform.is('android') && this.usuario == "profesor@profesor.com" || this.usuario == "administrativo@administrativo.com") {
    this.RegisterNotification();
    this.Notification();
    }
  }
  

  ionViewDidLoad() {
    this.usuarioActual = this.getUser();
    if (this.usuarioActual == 'alumno@alumno.com') {
      this.btnEncuestasPendientes=true;
      this.getMateriasAlumnos();
      this.historialEncuestaNotification();
    }    
  }

  historialEncuestaNotification() {
    this.eProvider.getEncuestas().subscribe(encuestas => {
      encuestas.forEach(encuesta => {
        if (encuesta.respondida == true) {
          this.materiasQueCursaAlumno.forEach(misMat => {
            encuesta.destinatarios.forEach(d => {
              if (d.clave == misMat) {
                this.encuestaAlumno.push(encuesta);
                this.cont++;
              }
            });
          });
        }
      });
    });    
  }

  getMateriasAlumnos() {
    this.eProvider.getMateriaAlumnos().subscribe(res => {
      res.forEach(e => {
        e.Alumnos.forEach(a => {
          if (a.email == this.usuarioActual) {
            this.materiasQueCursaAlumno.push(e.$key);
          }
        });
      });
    })
  }

  verEncuestas(){
    console.log(this.encuestaAlumno);
    if(this.encuestaAlumno.length > 0){
      let mensaje = this.encuestaAlumno.length == 1 ? 'Tenes 1 encuesta pendiente' : 'Tenes ' + this.encuestaAlumno.length +' encuestas pendientes';
      let alert = this.alertCtrl.create({
        title: 'Info',
        subTitle: mensaje,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Ok',
            handler: () => {
              console.log('Buy clicked');
              this.navCtrl.push(ListaRespuestaEncuestaHomePage,{data: this.encuestaAlumno});
            }
          }
        ]
      });
      alert.present();
    }  
  }

  getUser() {
    return this.afAuth.auth.currentUser.email;
  }

  presentModal() {
    let modal = this.modalCtrl.create(AsistenciaModalPage);
    modal.present();
  }
    
  private RegisterNotification(){
  
  this.push.register().then((t: PushToken) => {
    return this.push.saveToken(t);
  }).then((t: PushToken) => {
    console.log('Token saved:', t.token);
  });
}

  private Notification(){
  
  this.push.rx.notification()
  .subscribe((msg) => {
    
         let alert = this.alertCtrl.create({
            title: "Aviso de Importancia",
            subTitle: "Ingresaste al aula!",
            buttons: ['OK']
          });
          alert.present();
  });
}


}

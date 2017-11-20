import { Component } from '@angular/core';
import { Platform, NavController, ModalController, AlertController } from 'ionic-angular';
import { AsistenciaModalPage } from '../asistencia-modal/asistencia-modal';
import { RespuestaEncuestaHomePage } from '../respuesta-encuesta-home/respuesta-encuesta-home';
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';
import { AngularFireAuth } from 'angularfire2/auth';
import{ Push, PushToken } from '@ionic/cloud-angular';
import firebase from 'firebase';
import { ListaRespuestaEncuestaHomePage } from '../lista-respuesta-encuesta-home/lista-respuesta-encuesta-home';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";

declare var FCMPlugin;
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
  btnAsistencia=false;
 
  usuario;
  firestore = firebase.database().ref('/pushtokens');
  firemsg = firebase.database().ref('/messages');
  constructor(public platform: Platform,public navCtrl: NavController,public push: Push, public modalCtrl: ModalController,
    public alertCtrl:AlertController, public eProvider: EncuestaDataProvider, public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
        this.usuario=firebase.auth().currentUser.email;


    // if (platform.is('android') && this.usuario == "profesor@profesor.com" || this.usuario == "administrativo@administrativo.com") {
    // this.RegisterNotification();
    // this.Notification();
    // }

     this.tokensetup().then((token) => {
      this.storetoken(token);
    })
  }
  
ionViewDidLoad() {
   this.usuarioActual = this.getUser();
    if (this.usuarioActual == 'alumno@alumno.com') {
      this.btnEncuestasPendientes=true;
      //this.getMateriasAlumnos();
      this.historialEncuestaNotification();
    } else if (this.usuarioActual == 'profesor@profesor.com' || this.usuarioActual == 'administrativo@administrativo.com' ) {
      this.btnAsistencia=true;
    }  
  
FCMPlugin.onNotification(function(data){
if(data.wasTapped){
  //Notification was received on device tray and tapped by the user.
  alert( JSON.stringify(data) );
}else{
  //Notification was received in foreground. Maybe the user needs to be notified.
  alert( JSON.stringify(data) );
}
});

FCMPlugin.onTokenRefresh(function(token){
alert( token );
});    
}

tokensetup() {
var promise = new Promise((resolve, reject) => {
  FCMPlugin.getToken(function(token){
resolve(token);
  }, (err) => {
    reject(err);
});
})
return promise;
}

storetoken(t) {
this.af.list(this.firestore).push({
  uid: firebase.auth().currentUser.uid,
  devtoken: t
    
}).then(() => {
//  alert('Token stored');
  })

  if(this.usuario == "profesor@profesor.com" || this.usuario == "administrativo@administrativo.com")
  {
    this.af.list(this.firemsg).push({
      sendername: this.usuario,
      message: 'Ingresé al aula!'
    }).then(() => {
      //alert('Message stored');
      })
  }

}


  // ionViewDidLoad() {
  //   this.usuarioActual = this.getUser();
  //   if (this.usuarioActual == 'alumno@alumno.com') {
  //     this.getMateriasAlumnos();
  //     this.historialEncuestaNotification();
  //   }    
  // }
 

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

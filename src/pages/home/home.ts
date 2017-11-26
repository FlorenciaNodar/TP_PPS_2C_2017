import { Component } from '@angular/core';
import { Platform, NavController, ModalController, AlertController, ToastController} from 'ionic-angular';
import { AsistenciaModalPage } from '../asistencia-modal/asistencia-modal';
import { RespuestaEncuestaHomePage } from '../respuesta-encuesta-home/respuesta-encuesta-home';
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';
import { AngularFireAuth } from 'angularfire2/auth';
import{ Push, PushToken } from '@ionic/cloud-angular';
import firebase from 'firebase';
import { ListaRespuestaEncuestaHomePage } from '../lista-respuesta-encuesta-home/lista-respuesta-encuesta-home';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Graficos } from '../graficos/graficos';
import { PerfilPage } from '../perfil/perfil';
import { CodigoAlumnos } from '../codigoAlumnos/codigoAlumnos';
import { ToastCmp } from 'ionic-angular/components/toast/toast-component';
declare var FCMPlugin;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  conferenceDate = '2017-11-25';
  materiasQueCursaAlumno = [];
  usuarioActual: string;
  cont= 0;
  btnEncuestasPendientes=false;
  btnAsistencia=false;
  materiasAlumnoP = [];
  encuestasP = [];
  legajo= "";
  encuestasPendientes = [];
  materiasAlumno = [];
 
  usuario;
  firestore = firebase.database().ref('/pushtokens');
  firemsg = firebase.database().ref('/messages');
  estateProperty = {
    image: 'https://previews.123rf.com/images/iconicbestiary/iconicbestiary1602/iconicbestiary160200010/53122279-aula-de-la-escuela-vac-a-con-pizarra-verde-mesa-de-los-profesores-alumnos-mesas-y-sillas-ilustraci-n-Foto-de-archivo.jpg',
    style: 'Modern Interior',
    size: '25\' Lot',
    
  };
  constructor(public toast: ToastController,public platform: Platform,public navCtrl: NavController,public push: Push, public modalCtrl: ModalController,
    public alertCtrl:AlertController, public eProvider: EncuestaDataProvider, public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
        this.usuario=firebase.auth().currentUser.email;


    // if (platform.is('android') && this.usuario == "profesor@profesor.com" || this.usuario == "administrativo@administrativo.com") {
    // this.RegisterNotification();
    // this.Notification();
    // }

   
  }
  
ionViewDidLoad() {
   this.usuarioActual = this.getUser();
    if (this.usuarioActual == 'alumno@alumno.com') {
      this.btnEncuestasPendientes = true;
      this.obtenerLegajoUsuarioActual();      
      this.materiasQueCursaElAmuno();
      this.historialEncuestaNotification();  
    } else if (this.usuarioActual == 'profesor@profesor.com' || this.usuarioActual == 'administrativo@administrativo.com' ) {
      this.btnAsistencia=true;
    }  
  
FCMPlugin.onNotification(function(data){
if(data.wasTapped){
  //Notification was received on device tray and tapped by the user.
  let toast = this.toastCtrl.create({
    message: JSON.stringify(data) ,
    duration: 3000,
    position: "bottom"
    
  });
  toast.present();
  //alert( JSON.stringify(data) );
}else{
  //Notification was received in foreground. Maybe the user needs to be notified.
  let toast = this.toastCtrl.create({
    message: JSON.stringify(data) ,
    duration: 3000,
    position: "bottom"
    
  });
  toast.present();
 //alert(JSON.stringify(data)  );
}
});

FCMPlugin.onTokenRefresh(function(token){
//alert( token );

  let toast = this.toastCtrl.create({
    message: token.message  + "soy el" + token.sendername,
    duration: 3000,
    position: "bottom"
    
  });
  toast.present();


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

obtenerLegajoUsuarioActual() {
  this.infoAlumno().subscribe(alum=>{
    alum.forEach(a=>{
      this.legajo=a.legajo;
    })
  })  
}

materiasQueCursaElAmuno() {
  this.eProvider.getListaMatExcel().subscribe(materias => {
    materias.forEach(mat => {
      this.materiasAlumnoP.push(mat);
    });
  });
}

historialEncuestaNotification() {
  this.eProvider.getEncuestas().subscribe(encuestas => {
    this.encuestasP = encuestas;
  });
}  

notificationEncuestas(){
    this.encuestasPendientes=[];
    this.materiasAlumno =[];

    this.materiasAlumnoP.forEach(mat => {
      mat.forEach(info => {
        if (info[0] == this.legajo) {
          this.materiasAlumno.push(mat.$key);
        }
      });
    });

    this.encuestasP.forEach(encuesta => {
      if (encuesta.respondida == false && Date.now() < encuesta.finalizacion ) {
        this.materiasAlumno.forEach(misMat => {
          encuesta.destinatarios.forEach(d => {
            if (d == misMat) {
              this.encuestasPendientes.push(encuesta);
              this.cont++;
            }
          });
        });
      }
    }); 
    if(this.encuestasPendientes.length > 0){
      let mensaje = this.encuestasPendientes.length == 1 ? 'Tenes 1 encuesta pendiente' : 'Tenes ' + this.encuestasPendientes.length +' encuestas pendientes';
      let alert = this.alertCtrl.create({
        title: 'Info',
        subTitle: mensaje,
        buttons: [
          {
            text: 'cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'aceptar',
            handler: () => {
              console.log('Buy clicked');
              this.navCtrl.push(ListaRespuestaEncuestaHomePage,{data: this.encuestasPendientes});
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

    this.tokensetup().then((token) => {
      this.storetoken(token);
    })
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


infoAlumno(){
  return this.af.list('Alumno/', {
    query: {
      orderByChild: 'mail',
      equalTo: 'alumno@alumno.com'
    }
  })
}
graficoclick(){
  this.navCtrl.push(Graficos); 
}
qrclick(){
  this.navCtrl.push(CodigoAlumnos); 
}
perfilclick(){
  this.navCtrl.push(PerfilPage); 
}

}

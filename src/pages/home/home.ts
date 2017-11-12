import { Component } from '@angular/core';
import { Platform,NavController, ModalController,AlertController } from 'ionic-angular';
import { AsistenciaModalPage } from '../asistencia-modal/asistencia-modal';
import{ Push, PushToken } from '@ionic/cloud-angular';
import firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario;
  constructor(public platform: Platform,public navCtrl: NavController,public push: Push, public modalCtrl: ModalController,public alertCtrl:AlertController) {
        this.usuario=firebase.auth().currentUser.email;


    if (platform.is('android') && this.usuario == "profesor@profesor.com" || this.usuario == "administrativo@administrativo.com") {
         this.RegisterNotification();
    this.Notification();
        }
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

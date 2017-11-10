import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AsistenciaModalPage } from '../asistencia-modal/asistencia-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  presentModal() {
    let modal = this.modalCtrl.create(AsistenciaModalPage);
    modal.present();
  }  

}

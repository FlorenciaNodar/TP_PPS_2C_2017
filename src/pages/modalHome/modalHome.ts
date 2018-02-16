import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-modalHome',
  templateUrl: 'modalHome.html'
})
export class modalHome {
  usuario;
  usuarioActual: string;
  btnAsistencia = false;
  
  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {
    
    this.usuarioActual = this.getUser();
    if (this.usuarioActual == 'alumno@alumno.com') { 
    } else if (this.usuarioActual == 'profesor@profesor.com' || this.usuarioActual == 'administrativo@administrativo.com' ) {
      this.btnAsistencia=true;
    }  
  }
    getUser() {
    return this.afAuth.auth.currentUser.email;
  }

  

}
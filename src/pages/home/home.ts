import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { AsistenciaModalPage } from '../asistencia-modal/asistencia-modal';
import { RespuestaEncuestaHomePage } from '../respuesta-encuesta-home/respuesta-encuesta-home';
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  materiasQueCursaAlumno = [];
  usuarioActual: string;
  encuestaAlumno = [];
  cont= 0;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public afAuth: AngularFireAuth,
    public eProvider: EncuestaDataProvider, public alertCtrl: AlertController) {
      //console.log(this.encuestaAlumno);
  }

  ionViewDidLoad() {
    this.usuarioActual = this.getUser();
    if (this.usuarioActual == 'alumno@alumno.com') {
      this.getMateriasAlumnos();
      this.historialEncuestaNotification();
    }
    console.log(this.encuestaAlumno.length);
    console.log(this.encuestaAlumno);

    if (this.encuestaAlumno.length > 0) {
      let alert = this.alertCtrl.create({
        title: 'Info',
        subTitle: 'Tienes ' + this.encuestaAlumno.length +' encuestas pendientes',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  historialEncuestaNotification() {
    this.eProvider.getEncuestas().subscribe(encuestas => {
      encuestas.forEach(encuesta => {
        if (encuesta.enviada == true) {
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

  getUser() {
    return this.afAuth.auth.currentUser.email;
  }


  presentModal() {
    let modal = this.modalCtrl.create(AsistenciaModalPage);
    modal.present();
  }

  reponderEncuesta() {
    this.navCtrl.push(RespuestaEncuestaHomePage);
  }



}

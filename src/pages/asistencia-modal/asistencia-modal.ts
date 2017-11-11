import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AsistenciDataProvider } from '../../providers/asistencia-data/asistencia-data';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-asistencia-modal',
  templateUrl: 'asistencia-modal.html',
})
export class AsistenciaModalPage {

  aulas: FirebaseListObservable<any[]>;
  materias: FirebaseListObservable<any[]>;
  alumnos: FirebaseListObservable<any[]>;
  aulaSelected: { nombre: '' };
  materiaSelected: { descripcion: '' };
  alumnosAsistencia = [];
  checkin: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public asisProvider: AsistenciDataProvider, public alertCtrl: AlertController, public datePipeCtrl: DatePipe) {

  }

  ionViewDidLoad() {
    this.aulas = this.asisProvider.getAulas();
  }

  getMateriasPorAulaSeleccionada() {
    this.materias = this.asisProvider.getMateriasPorAula(this.aulaSelected.nombre);
  }

  getAlumnosRelacionAulaMateria() {
    this.alumnos = this.asisProvider.getAlumnosRelacionAulaMateria(this.aulaSelected.nombre, this.materiaSelected.descripcion);    
  }

  asistencia(alumno) {
    var estaIncluido = this.alumnosAsistencia.indexOf(alumno);
    alumno.asistencia = alumno.asistencia;

    if (estaIncluido != -1) {
      this.alumnosAsistencia.forEach(a => {
        if (a == alumno) {
          a.asistencia = alumno.asistencia;
        }
      })
    } else {
      this.alumnosAsistencia.push(alumno);
    }
    this.alumnosAsistencia.forEach(a => {
      console.log(a);
    })
  }

  ejecutar() {
    if (this.alumnosAsistencia.length > 0) {
      let alumnosFinal = [];
      this.alumnosAsistencia.forEach(alumno => {
        let alumnoNew = { nombre: '', apellido: '', asistio: false }
        alumnoNew.nombre = alumno.nombre;
        alumnoNew.apellido = alumno.apellido;
        alumnoNew.asistio = alumno.asistencia;
        alumnosFinal.push(alumnoNew);
      })
      let datePipe = this.datePipeCtrl.transform(Date.now(), 'dd-MM-yyyy');
      this.asisProvider.guardarRegistroAsistenciaDelDia(this.aulaSelected.nombre, this.materiaSelected.descripcion, datePipe, alumnosFinal);
    }
    this.viewCtrl.dismiss();
  }

  cancelar() {
    this.viewCtrl.dismiss();
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

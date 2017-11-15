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

  listadoAlumnos = [];
  listadosAlumnosPorMateria =[];

  listaFinal =[{asistio: false}];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public asisProvider: AsistenciDataProvider, public alertCtrl: AlertController, public datePipeCtrl: DatePipe) {

  }

  ionViewDidLoad() {
    this.aulas = this.getAulasMaterias();   
  }

  getAulasMaterias(){
    return this.asisProvider.getAulasMaterias();
  }

  getMateriasPorAulaSeleccionada() {
    this.materias = this.asisProvider.getMateriasPorAula(this.aulaSelected);
  }

  getAlumnosMateriaSelected(){
    this.asisProvider.getAlumnos().subscribe(alumnos=>{
      alumnos.forEach(alumno=>{
        alumno.materia.forEach(m=>{
          console.log(m);
          if(this.materiaSelected == m){
            this.listadoAlumnos.push(alumno);
          }
        })
      });
    });
  }    

  registrarAsistencia() {    
    if (this.listadoAlumnos.length > 0) {
      let alumnosRegistroAsistencia = [];
      this.listadoAlumnos.forEach(alumno => {
        let alumnoNew = { nombre: '', apellido: '', asistio: false }
        alumnoNew.nombre = alumno.nombre;
        alumnoNew.apellido = alumno.apellido;
        if(alumno.asistio){
          alumnoNew.asistio = alumno.asistio;
        }else{
          alumnoNew.asistio = false;
        }        
        alumnosRegistroAsistencia.push(alumnoNew);
      });
      let datePipe = this.datePipeCtrl.transform(Date.now(), 'dd-MM-yyyy');
      this.asisProvider.registroAsistenciaDelDia(datePipe,this.aulaSelected, this.materiaSelected, alumnosRegistroAsistencia);
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

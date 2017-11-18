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
  listadosAlumnosPorAula: FirebaseListObservable<any[]>;;
  listaFinal =[{asistio: false}];
  imag = '';
  listExcel : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public asisProvider: AsistenciDataProvider, public alertCtrl: AlertController, public datePipeCtrl: DatePipe) {

      this.getListaAlumnosExcel();

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

  getListaAlumnosExcel(){
    this.listExcel = this.asisProvider.getListaAlumnosExcel();
    this.listExcel.forEach(elem =>{
      //console.log(elem);
    });
  }

  getAlumnosPorAulaAelected(){
    this.asisProvider.getAlumnosPorAulaAelected(this.aulaSelected).subscribe(alumnos=>{
      this.listadoAlumnos=alumnos;
      alumnos.forEach(alumno=>{
        console.log(alumno[0]+ ' ' + alumno[1]);
        /*alumno.forEach(a=>{
          console.log(a);
        })*/
      })
    });
    
  }

  /*tomarFoto() {
    this.imag = { imagen: '', usuario: '', tipoImg: '', seleccionada: false };
    this.cameraCtrl.getPicture({
      destinationType: this.cameraCtrl.DestinationType.DATA_URL,
      targetWidth: 800,
      targetHeight: 800
    }).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.imag.imagen = this.base64Image;
      this.imag.usuario = this.fireDbProvider.auth.getUser().email;
      this.imag.tipoImg = this.tipoImg;
      this.imag.seleccionada = false;
      this.imagenes.push(this.imag);
      this.mostrar = true;
    }, (err) => {
      console.log(err);
      if (err.mensaje) {
        this.showAlert("Error", err.mensaje);
      }
    });
  }*/


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
    let cont=0;
    if (this.listadoAlumnos.length > 0) {
      let alumnosRegistroAsistencia = [];
      this.listadoAlumnos.forEach(alumno => {
        if (alumno != ""){
          let alumnoNew = { legajo: '', nombreYapellido: '', asistio: false }
          alumnoNew.legajo = alumno[0];
          alumnoNew.nombreYapellido = alumno[1];
          if(alumno.asistio){
            alumnoNew.asistio = alumno.asistio;
          }else{
            alumnoNew.asistio = false;
          }        
          alumnosRegistroAsistencia.push(alumnoNew);
        }
        
      });

      let datePipe = this.datePipeCtrl.transform(Date.now(), 'dd-MM-yyyy');
      let jsonAsistencia = {fecha:datePipe, aula: this.aulaSelected, alumnos: alumnosRegistroAsistencia};
      
      //this.asisProvider.registroAsistenciaDelDia(datePipe,this.aulaSelected, this.materiaSelected, alumnosRegistroAsistencia);
      this.asisProvider.registroAsistenciaDelDia(jsonAsistencia);
      
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

  prueba(){
    this.asisProvider.getHistoricoAsistencias().subscribe(historial=>{
      historial.forEach(elem=>{
        elem.alumnos.forEach(a=>{
          console.log(a.asistio);
        })
      })
    })
  }

}

import { Component } from '@angular/core';
import { NavController,ModalController  } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { nuevoAlumno } from '../nuevoAlumno/nuevoAlumno';
import { Observable } from 'rxjs/Observable';


import firebase from 'firebase';


@Component({
  selector: 'page-alumno',
  templateUrl: 'alumno.html'
})
export class Alumno {

 items: Observable<any[]>;
  nombre;
  apellido;
  nombreInsertado;
  apellidoInsertado;
  constructor (public navCtrl: NavController, public af: AngularFireDatabase,public modalCtrl: ModalController) {
  }
 ngOnInit() {
    this.items = this.getCourses('/Alumno/');
  }

    getCourses(listPath): Observable<any[]> {
    return this.af.list(listPath).valueChanges();
  }


addNewAlumn(){

    this.nombreInsertado = this.nombre;
    this.apellidoInsertado = this.apellido;


    this.af.list("/Alumno/").push({
    nombre: this.nombreInsertado,
    apellido: this.apellidoInsertado
    });

    this.nombre = "";
    this.apellido= "";
    this.ngOnInit();
}

delete(i){

    
    this.af.list("/Alumno/").remove(this.items[i]);

    this.ngOnInit();

}

 presentModal() {
    let modal = this.modalCtrl.create(nuevoAlumno);
    modal.present();
  }

}

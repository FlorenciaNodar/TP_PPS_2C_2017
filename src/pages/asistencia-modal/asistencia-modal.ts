import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AsistenciDataProvider } from '../../providers/asistencia-data/asistencia-data';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-asistencia-modal',
  templateUrl: 'asistencia-modal.html',
})
export class AsistenciaModalPage {

  aulas: FirebaseListObservable<any[]>;
  materias: FirebaseListObservable<any[]>;

  aulaSelected: {nombre: ''};

  materiasRelacionAula =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public asisProvider: AsistenciDataProvider) {

  }

  ionViewDidLoad() {
    this.aulas = this.asisProvider.getAulas();
    //this.materias = this.asisProvider.getMaterias();   
  }

  getMateriasPorAulaSeleccionada(){  
    this.materias = this.asisProvider.getMateriasPorAula(this.aulaSelected.nombre);
  }

  cerrarModal() {
    this.viewCtrl.dismiss();
  }

}

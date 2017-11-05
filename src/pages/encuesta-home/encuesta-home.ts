import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';
import { AngularFireList } from 'angularfire2/database';
import { EncuestaPage } from '../encuesta/encuesta';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-encuesta-home',
  templateUrl: 'encuesta-home.html',
})
export class EncuestaHomePage {


  encuestas: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public encuestaDataProvider: EncuestaDataProvider) {

    this.encuestas = this.encuestaDataProvider.getEncuestas().valueChanges();
    console.log(this.encuestas);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestaHomePage');
  }

  generarEncuesta(){
    this.navCtrl.push(EncuestaPage);
  }

}

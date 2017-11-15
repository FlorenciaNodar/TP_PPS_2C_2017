import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-respuesta-encuesta-detalle',
  templateUrl: 'respuesta-encuesta-detalle.html',
})
export class RespuestaEncuestaDetallePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RespuestaEncuestaDetallePage');
  }

  // Doughnut
public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
public doughnutChartData:number[] = [350, 450, 100];
public doughnutChartType:string = 'doughnut';

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

}

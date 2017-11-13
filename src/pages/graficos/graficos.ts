import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-graficos',
  templateUrl: 'graficos.html'
})
export class Graficos {
    
public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels:string[] = ['2017'];
public barChartType:string = 'bar';
public barChartLegend:boolean = true;

public barChartData:any[] = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Presentes'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Ausentes'}
];


constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

}



// eventos
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

public randomize():void {
  let data = [
    Math.round(Math.random() * 100),
    59,
    80,
    (Math.random() * 100),
    56,
    (Math.random() * 100),
    40];
  let clone = JSON.parse(JSON.stringify(this.barChartData));
  clone[0].data = data;
  this.barChartData = clone;
}

}
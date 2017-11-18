import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EncuestaDataProvider } from '../../providers/encuesta-data/encuesta-data';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';


@IonicPage()
@Component({
  selector: 'page-respuesta-encuesta-detalle',
  templateUrl: 'respuesta-encuesta-detalle.html',
})
export class RespuestaEncuestaDetallePage {

  encuestaR: FirebaseListObservable<any[]>;
  encuesta = { preguntas: [{ texto: '' }], $key: '' };
  encuestaRP = [];
  cantSi = 0;
  cantNo = 0;
  public chartData: number[]
  //preguntaRespuestas = { pregunta: '', respuestas: {} };
  preguntasRespuestas = [];

  preguntaRespuestas =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public eProvider: EncuestaDataProvider) {

    this.encuesta = this.navParams.get('data');
    this.encuestaR = this.eProvider.getEncuestaRespuesta(this.encuesta.$key);

    this.encuesta.preguntas.forEach(p => {
      var respuestas = [];
      this.encuestaR.forEach(er => {
        er.forEach(eRPreguntas => {
          var filter = eRPreguntas.preguntas.filter(function (pregunta) { return p.texto == pregunta.texto });
          respuestas.push(filter);
        });
      });
      this.preguntasRespuestas.push({ pregunta: p, respuestas: respuestas });
    });
  }

  estadistica() {
    //console.log(this.preguntasRespuestas);
    var siCant = 0;
    var noCant = 0;
    var respOp=[];
    this.preguntasRespuestas.forEach(pRespuestas => {
      pRespuestas.respuestas.forEach(res => {        
        res.forEach(r => {
          if (r.tipoRespuesta === "SI-NO") {
            pRespuestas.pregunta.chartLabels = ['si', 'no'];
            if (r.siValue != undefined && r.siValue == true) {
              siCant++;
            } else if (r.noValue != undefined && r.noValue == true) {
              noCant++;
            }
          } else if (r.tipoRespuesta === "OPCIONES") {
            var ops = [];
            r.opciones.forEach(op=>{
              ops.push(op);
            });
            pRespuestas.pregunta.chartLabels = ops;
          } else if (r.tipoRespuesta === "OPINION") {
            respOp.push(r.opinionValue);
            pRespuestas.pregunta.opiniones = respOp;
          }
        })

      });
      pRespuestas.pregunta.chartData = [siCant, noCant];
      //console.log(pRespuestas);
      this.preguntaRespuestas.push(pRespuestas);
    });

    console.log(this.preguntaRespuestas);

  }

  // Doughnut
  //public chartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  //public chartData:number[] = [350, 450];
  public chartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}

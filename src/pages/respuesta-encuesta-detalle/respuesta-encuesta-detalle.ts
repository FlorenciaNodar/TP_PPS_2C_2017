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
  cantidadRespuestas = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eProvider: EncuestaDataProvider) {

    this.encuesta = this.navParams.get('data');
    this.encuestaR = this.eProvider.getEncuestaRespuesta(this.encuesta.$key);

    this.encuesta.preguntas.forEach(p => {
      var respuestas = [];
      this.encuestaR.forEach(er => {
        this.cantidadRespuestas++;
        er.forEach(eRPreguntas => {
          var filter = eRPreguntas.preguntas.filter(function (pregunta) { return p.texto == pregunta.texto });
          respuestas.push(filter);
        });
      });
      this.preguntasRespuestas.push({ pregunta: p, respuestas: respuestas });
    });

    }

  estadistica() {
    var siCant = 0;
    var noCant = 0;
    var respOp=[];
    var cantOp=0;
    var op0=0;
    var op1=0;
    var op2=0;
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
            pRespuestas.pregunta.chartData = [siCant, noCant];
          } else if (r.tipoRespuesta === "OPCIONES") {
            var ops = [];
            r.opciones.forEach(op=>{              
              ops.push(op);
            });

            if(r.opcionValue == 0){
              op0++;
            }else if (r.opcionValue == 1){
              op1++;
            }else if (r.opcionValue == 2){
              op2++;
            }
            pRespuestas.pregunta.chartLabels = ops;
            
            if(r.opciones.length == 1){
              pRespuestas.pregunta.chartData = [op0];
            } else if (r.opciones.length == 2){
              pRespuestas.pregunta.chartData = [op0, op1];
            } else if (r.opciones.length == 3){
              pRespuestas.pregunta.chartData = [op0, op1, op2];
            }
            
          } else if (r.tipoRespuesta === "OPINION") {
            respOp.push(r.opinionValue);
            pRespuestas.pregunta.opiniones = respOp;
          }
        });

      });
      //pRespuestas.pregunta.chartData = [siCant, noCant];
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

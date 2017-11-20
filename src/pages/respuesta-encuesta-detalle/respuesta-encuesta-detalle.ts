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
    var respOp=[];
    var op0=0;
    var op1=0;
    var op2=0;
    var op0Una=0;
    var op1Una=0;
    var op2Una=0;
    this.preguntasRespuestas.forEach(pRespuestas => {
      pRespuestas.respuestas.forEach(res => {        
        res.forEach(r => {
          if (r.tipoRespuesta === "UNASOLARESPUESTA") {
            let arrayOp=[];
            r.opciones.forEach(op=>{
              arrayOp.push(op);
            });            
            if(r.opcionValue == '0'){
              op0Una++;
            } else if (r.opcionValue == '1'){
              op1Una++;
            } else if (r.opcionValue == '2'){
              op2Una++;
            }
            pRespuestas.pregunta.chartLabels = arrayOp;
            if(r.opciones.length == 1){
              pRespuestas.pregunta.chartData = [op0Una];
            } else if (r.opciones.length == 2){
              pRespuestas.pregunta.chartData = [op0Una, op1Una];
            } else if (r.opciones.length == 3){
              pRespuestas.pregunta.chartData = [op0Una, op1Una, op2Una];
            }            
          } else if (r.tipoRespuesta === "OPCIONES") {
            var ops = [];
            r.opciones.forEach(op=>{              
              ops.push(op);
            });

            if(r.opciones.length == 2){
              r.opcionValues.forEach(op=>{
                if(op == '0'){
                  op0++;
                } else if (op == '1'){
                  op1++;
                }
              });
            }

            if(r.opciones.length == 3){
              r.opcionValues.forEach(op=>{
                if(op == '0'){
                  op0++;
                } else if (op == '1'){
                  op1++;
                } else if (op == '2'){
                  op2++;
                }
              });
            }           
            pRespuestas.pregunta.chartLabels = ops;
            
            if(r.opciones.length == 2){
              pRespuestas.pregunta.chartData = [op0,op1];
            } else if (r.opciones.length == 3){
              pRespuestas.pregunta.chartData = [op0, op1,op2];
            } 
            
          } else if (r.tipoRespuesta === "OPINION") {
            respOp.push(r.opinionValue);
            pRespuestas.pregunta.opiniones = respOp;
          }
        });

      });
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

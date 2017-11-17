import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import firebase from 'firebase';

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
asistio;
noAsistio;
public barChartData:any[];

dato;
algo =[];
contAsistio =0 ;
contNoAsistio =0 ;
listcodigos: FirebaseListObservable<any>;
constructor(public navCtrl: NavController, public modalCtrl: ModalController,public af: AngularFireDatabase) {

//comentario
  
 this.af.list('/HistoricoAsistencias/').subscribe(e=>{
   e.forEach(res=>{
      this.algo.push(res.alumnos);
   })
    this.algo.forEach(element => {
       element.forEach(aux => {
         if(aux.asistio == true)
          {
           this.contAsistio++;
           
            
          }else{
            this.contNoAsistio++;
          }
   
       });
        this.ngOnInit(this.contAsistio, this.contNoAsistio);
             
       });
});
}


ngOnInit(dato1, dato2){
 this.barChartData = [
    {data: [dato1], label: 'Presentes'},
  {data: [dato2], label: 'Ausentes'}
]
}

// eventos
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

public randomize():void {
  
this.contAsistio = 0;
this.contNoAsistio = 0;
this.af.list('/HistoricoAsistencias/').subscribe(e=>{
e.forEach(res=>{
    this.algo.splice(res.alumnos,1)
  this.algo.push(res.alumnos);
})

this.algo.forEach(element => {
    element.forEach(aux => { 
      if(aux.asistio == true)
      {
        this.contAsistio++;
        
        
      }else{
        this.contNoAsistio++;
      }

    });
          
    });

});
                this.ngOnInit(this.contAsistio, this.contNoAsistio);

}

}
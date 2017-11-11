import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import * as papa from 'papaparse';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";

@IonicPage()
@Component({
  selector: 'page-listas',
  templateUrl: 'listas.html',
})
export class ListasPage {

  public csvData: any[] = [];
  lista: FirebaseListObservable<any[]>;
  archivo: string;
  testRadioOpen: boolean;
  testRadioResult;

  constructor(public navCtrl: NavController, private http: Http,public af: AngularFireDatabase,public alertCtrl: AlertController) {
    this.readCsvData();
    this.lista= af.list('/listas/');
  }
 
  private readCsvData() {
    //this.archivo = "PPS -4A-2c2017";
    if(this.archivo != null){
    this.http.get('assets/archivos/'+this.archivo)
      .subscribe(
      data => this.extractData(data),
      err => this.handleError(err)
      );
    }
    
  }
 
  private extractData(res) {
    let csvData = res['_body'] || '';
    let parsedData = papa.parse(csvData).data;
 
    this.csvData = parsedData;
    console.log('respuesta ',  this.csvData);
  }
 
  downloadCSV() {
    let csv = papa.unparse(this.csvData);
 
    var blob = new Blob([csv]);
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "newdata.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
 
  private handleError(err) {
    console.log('Error ', err);
  }
 
  trackByFn(index: any, item: any) {
    return index;
  }
  public guardarLista()
  {
    this.af.list("/listas/").set(this.archivo,this.csvData).then((response)=>{
      this.AlertMensaje("Éxito!", "Se guardó con éxito!!");
    }).catch((error: any) => {
      this.AlertMensaje("Error", error);
    })

  }
  AlertMensaje(titulo: string, mens: string)
  {
    
      let ventana = this.alertCtrl.create({
      title: titulo,
      message: mens,
      buttons:[
        {
          text: "Aceptar",
          handler: data => {
            console.log('Mensaje de Alerta');
            }
          }
        ]

      });
      ventana.present(ventana);
    } 
    public elegirArchivos(){
      let alert = this.alertCtrl.create();
      alert.setTitle('Elegir archivo');
    
      alert.addInput({
        type: 'radio',
        label: 'PPS -4A-2c2017',
        value: 'PPS -4A-2c2017',
        checked: true
      });
    
      alert.addInput({
        type: 'radio',
        label: 'PPS-4b-2c2017',
        value: 'PPS-4b-2c2017'
      });
    
      alert.addButton('Cancel');
      alert.addButton({
        text: 'Ok',
        handler: data => {
          console.log('Radio data:', data);
          this.testRadioOpen = false;
          this.testRadioResult = data;
    ;
          if(data){
            switch (data) {
              case 'PPS -4A-2c2017':
               this.archivo ='PPS -4A-2c2017.csv';
               this.readCsvData();
                break;
              case 'PPS-4b-2c2017':
              this.archivo ='PPS-4b-2c2017.csv';
              this.readCsvData();
                break;
              
            }
          }
      
        }
      });
    
      alert.present().then(() => {
        this.testRadioOpen = true;
      });
    }
}

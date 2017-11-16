import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import * as papa from 'papaparse';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

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
  arch: any[] = [];
  nombre: string;

  constructor(public navCtrl: NavController,private fileTransfer: FileTransfer, private file: File, private http: Http,public af: AngularFireDatabase,public alertCtrl: AlertController) {
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
    this.arch = parsedData;
    this.csvData = parsedData;
    console.log('respuesta ',  this.csvData);
  }
 
  downloadCSV() {
    if(this.archivo != null){
    let csv = papa.unparse(this.csvData);
 
    var blob = new Blob([csv]);
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "newdata.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    var pathFile= this.file.externalDataDirectory + 'Download/';

        const fileTransfer =  this.fileTransfer.create();
        const imageLocation = `${this.file.applicationDirectory}www/assets/archivos/${this.archivo}`;
        
        fileTransfer.download(imageLocation, pathFile + this.archivo).then((entry) => {
          const alertSuccess = this.alertCtrl.create({
            title: `Descarga exitosa!`,
            subTitle: ` Fue descargado con éxito a: ${entry.toNativeURL()}`,
            buttons: ['Ok']
          });
      
          alertSuccess.present();
      
        }, (error) => {
      
          const alertFailure = this.alertCtrl.create({
            title: `Falló la descarga!`,
            subTitle: ` No se descargó correctamente. Error: ${error.code}`,
            buttons: ['Ok']
          });
      
          alertFailure.present();
      
        });
      
  
  }else{
    this.AlertMensaje('Error', 'No seleccionó ningún archivo!');
  }
  
 }
 
  private handleError(err) {
    console.log('Error ', err);
  }
 
  trackByFn(index: any, item: any) {
    return index;
  }
  public guardarLista()
  { 
    if(this.archivo != null){
      let arc = this.arch;
      this.af.list("/listas/").set(this.nombre,arc).then((response)=>{
        this.AlertMensaje("Éxito!", "Se guardó con éxito!!");
      }).catch((error: any) => {
        this.AlertMensaje("Error", error);
      })
    }else{
      this.AlertMensaje('Error', 'No seleccionó ningún archivo!');
    }
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
               this.nombre ='PPS -4A-2c2017';
               this.readCsvData();
                break;
              case 'PPS-4b-2c2017':
              this.archivo ='PPS-4b-2c2017.csv';
              this.nombre ='PPS-4b-2c2017';
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

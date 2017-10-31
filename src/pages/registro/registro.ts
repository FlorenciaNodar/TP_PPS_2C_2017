import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';

import { NavController, NavParams, ActionSheetController, LoadingController, AlertController, Platform } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthProvider, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html'
})
export class RegistroPage {

  usuarioSelecionado = {email: '', password: '',password1: ''};       
  public mensaje: string;          
  
    constructor(public loadingCtrl: LoadingController, public navCtrl: NavController,private af: AngularFireAuth,
      public navParams: NavParams, public platform: Platform, public actionsheetCtrl: ActionSheetController,
      public alertCtrl: AlertController) {
  
    }
    Registrar(){

      if(this.ValidaCamposReg())
      {
        this.af.auth.createUserWithEmailAndPassword(this.usuarioSelecionado.email,this.usuarioSelecionado.password).then((response)=>{
        
        this.AlertMensaje("Bienvenido", "Su perfil a sido guardado con exito!!!");
        this.navCtrl.push(HomePage);

      }).catch((error: any) => {
        if (error) {
          switch (error.code) {
            case 'INVALID_EMAIL':
            this.AlertMensaje("Error!!",'Email inválido.');
              break;
            case 'EMAIL_TAKEN':
            this.AlertMensaje("Error!!",'Este email ya está siendo utilizado.');
              break;
            case 'NETWORK_ERROR':
            this.AlertMensaje("Error!!",'Ha ocurrido algún error al intentar conectarse al servidor, vuelva a intentarlo más tarde.');
              break;
            default:
            this.AlertMensaje("Error!!",'Email o la contraseña son inválidos.');
          }
        }
      })
      }
      else{
        this.AlertMensaje("Atencion!!", this.mensaje);
      }
      

    }
    Mensaje(numero){

      if(numero == 1){
        this.mensaje = "<h2>Debe completar los campos requeridos!.</h2>";
      }  
      if(numero == 2){
        this.mensaje = "<h2>Debe completar los campos email!.</h2>";
      }
      if(numero == 3){
        this.mensaje = "<h2>Debe completar los campos contraseña!.</h2>";
      }
      if(numero == 4){
        this.mensaje = "<h2>Las contraseñas no coinciden!.</h2>";
      }  
    }
    ValidaCamposReg():boolean
    {
      if(this.usuarioSelecionado.email == ""  && this.usuarioSelecionado.password == ""  && this.usuarioSelecionado.password1 == "")
      {
        this.Mensaje(1);
        return false;
      }
      if(this.usuarioSelecionado.email == "")
      {
        this.Mensaje(2);
        return false;
      }
      if(this.usuarioSelecionado.password == "" || this.usuarioSelecionado.password1 == "")
      {
        this.Mensaje(3);
        return false;
      }
      if(this.usuarioSelecionado.password != this.usuarioSelecionado.password1)
      {
        this.Mensaje(4);
        return false;
      }
      
      return true;
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
}

import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';

import { NavController, NavParams,ActionSheetController, LoadingController,AlertController, Platform } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthProvider, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class Login{
  email: any;
  password: any;
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, public platform : Platform, public actionsheetCtrl: ActionSheetController,public alertCtrl: AlertController)
   {

   }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login(){
      let loader = this.loadingCtrl.create({
      content: "Espere...",
      duration: 2600
      });
      loader.present();

   firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(ok => {
            
              this.navCtrl.push(TabsPage);           
        },
        error => {
          let alert = this.alertCtrl.create({
          title: 'ERROR!',
          subTitle: 'Usuario y/o contraseña incorrectas!',
          buttons: ['OK']
          });
          alert.present();        
        }
    );
  }
  
  administrador(){
    this.email = "administrador@administrador.com";
    this.password = "administrador";
  }
  profesor(){
    this.email = "profesor@profesor.com";
    this.password = "profesor";
  }
  administrativo(){
    this.email = "administrativo@administrativo.com";
    this.password = "administrativo";
  }
  alumno(){
    this.email = "alumno@alumno.com";
    this.password = "alumno";
  }


  facebook(){
 
  }
  github(){
 
  }
  
  google(){
    const loading = this.loadingCtrl.create({
    content: 'Espere...'
    });
    loading.present();

  }
}
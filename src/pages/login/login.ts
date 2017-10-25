import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';

import { NavController, NavParams, ActionSheetController, LoadingController, AlertController, Platform } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthProvider, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class Login {
  email: any;
  password: any;
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController,
    public navParams: NavParams, public platform: Platform, public actionsheetCtrl: ActionSheetController,
    public alertCtrl: AlertController, public facebook: Facebook) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login() {
    let loader = this.loadingCtrl.create({
      content: "Espere...",
      duration: 2600
    });
    loader.present();


    if (this.email == null || this.password == null) {
      let alert = this.alertCtrl.create({
        title: 'ADVERTENCIA!',
        subTitle: 'Debe completar todos los campos!',
        buttons: ['OK']
      });
      alert.present();
    }
    else {
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

  }

  sinUsuario() {
    this.email = "";
    this.password = "";
  }
  administrador() {
    this.email = "administrador@administrador.com";
    this.password = "administrador";
  }
  profesor() {
    this.email = "profesor@profesor.com";
    this.password = "profesor";
  }
  administrativo() {
    this.email = "administrativo@administrativo.com";
    this.password = "administrativo";
  }
  alumno() {
    this.email = "alumno@alumno.com";
    this.password = "alumno";
  }

  signInWithFacebook() { 
    //verifico si la platforma es movile, sino es web.   
    if (this.platform.is('cordova')) {
      this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
         firebase.auth().signInWithCredential(facebookCredential).then(res=>{
          this.navCtrl.push(TabsPage);
         });
      }).catch(err=>{
        this.showAlertError('Usuario y/o contraseña incorrectas!');
      })
    }
    else {
     this.facebookWeb()
        .then(res => {
          this.navCtrl.push(TabsPage);
        }).catch(err=>{
          this.showAlertError('Usuario y/o contraseña incorrectas!');          
        })
    } 
  }  

  facebookWeb(): Promise<any> {
    return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((res) => Promise.resolve);
  }

  github() {

  }

  google() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // firebase.auth().signInWithRedirect(provider);

      // //Loading
      // const loading = this.loadingCtrl.create({
      // content: 'Espere...'
      // });
      // loading.present();

      this.navCtrl.push(TabsPage);

      // ...
    }).catch(error => {
      let alert = this.alertCtrl.create({
        title: 'ERROR!',
        subTitle: 'Usuario y/o contraseña incorrectas!',
        buttons: ['OK']
      });
      alert.present();
    });

  }

  showAlertError(mensaje: string ){
    let alert = this.alertCtrl.create({
      title: 'ERROR!',
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }
}
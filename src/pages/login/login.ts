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
  //email: any;
  //password: any;

  listUsuarios = [{ id: 1, email: "administrador@administrador.com", password: "administrador", perfil: "administrador"},
                  { id: 2, email: "profesor@profesor.com", password: "profesor", perfil: "profesor"},
                  { id: 3, email: "administrativo@administrativo.com", password: "administrativo", perfil: "administrativo"},
                  { id: 3, email: "alumno@alumno.com", password: "alumno", perfil: "alumno"}];

  usuarioSelecionado = {email: '', password: ''};                 

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController,
    public navParams: NavParams, public platform: Platform, public actionsheetCtrl: ActionSheetController,
    public alertCtrl: AlertController, public facebook: Facebook) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login() {
    if (this.usuarioSelecionado.email == '' || this.usuarioSelecionado.password == '') {
      let alert = this.alertCtrl.create({
        title: 'ADVERTENCIA!',
        subTitle: 'Debe completar todos los campos!',
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      firebase.auth().signInWithEmailAndPassword(this.usuarioSelecionado.email, this.usuarioSelecionado.password).then(ok => {
        let loader = this.loadingCtrl.create({
          content: "Espere...",
          duration: 2600
        });
        loader.present();
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

  /*sinUsuario() {
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
  }*/

  /*facebookLogin() {
    this.signInWithFacebook().then(res=>{      
      this.navCtrl.push(TabsPage); 
    })
  }*/

  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential).then(() => {
          this.navCtrl.push(TabsPage); 
          console.log(facebookCredential);         
        }).catch(error => {
          console.log(error);
          alert("Secundario: "+error);
        });
      }).catch(error => {
        alert("Principal: "+error);
      });
    } else {
      firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((res) => {
        let loader = this.loadingCtrl.create({
          content: "Espere...",
          duration: 2600
        });
        loader.present();
        this.navCtrl.push(TabsPage);
      }).catch(error => {
        console.log(error);
      });
    }
  }  

  /* facebookWeb(): Promise<any> {
     return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
       .then((res) => Promise.resolve);
   }*/

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

  showAlertError(mensaje: string) {
    let alert = this.alertCtrl.create({
      title: 'ERROR!',
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }
}
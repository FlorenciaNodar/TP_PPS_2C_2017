import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { NavController, NavParams, ActionSheetController, LoadingController, Loading, AlertController, Platform } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthProvider, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import {GooglePlus} from '@ionic-native/google-plus';
import { RegistroPage } from '../registro/registro';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Events } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class Login {
  //email: any;
  //password: any;
  public loading: Loading;
  private browser;
  
  listUsuarios = [{ id: 1, email: "administrador@administrador.com", password: "administrador", perfil: "administrador"},
                  { id: 2, email: "profesor@profesor.com", password: "profesor", perfil: "profesor"},
                  { id: 3, email: "administrativo@administrativo.com", password: "administrativo", perfil: "administrativo"},
                  { id: 3, email: "alumno@alumno.com", password: "alumno", perfil: "alumno"}];

  usuarioSelecionado = {email: '', password: ''};                 

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController,
    private events: Events, private iab: InAppBrowser, private http: Http,
    public navParams: NavParams, public platform: Platform, public actionsheetCtrl: ActionSheetController,
    public alertCtrl: AlertController, public facebook: Facebook,public googlePlus: GooglePlus) {

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

   public githubLogin(): Promise<any> {
    let s = this;
    let ignorarExit = false;
    return new Promise(function(resolve, reject) {
        s.browser = (<any>window).cordova.InAppBrowser.open('http://github.com/login/oauth/authorize?client_id=38e68dbc2d4999af573e&redirect_uri=https://usuarios-1afa4.firebaseapp.com/__/auth/handler', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');

        s.browser.addEventListener('loaderror', (event) => {
            console.log('loaderror: ', event);

            ignorarExit = true;
            s.browser.removeEventListener("exit", (event) => {});
            s.browser.close();

            let msg = event.message;
            if (event.message == 'net::ERR_NAME_NOT_RESOLVED') {
                msg = 'Es probable que no tengas Internet. Chequea tu conexión.';
            }
            reject(msg);
        });

        s.browser.addEventListener("loadstart", (event) => {
            console.log('loadstart: ', event.url);
            if ((event.url).indexOf("https://usuarios-1afa4.firebaseapp.com/__/auth/handler") === 0) {

                ignorarExit = true;
                s.browser.removeEventListener("exit", (event) => {});
                s.browser.close();

                let parts = event.url.split('?code=');
                s.http.post('https://github.com/login/oauth/access_token', {
                    client_id: '38e68dbc2d4999af573e',
                    client_secret: '9fe1a4366e1dd29754106cfd780b077459b33ef0',
                    code: parts[1]
                })
               .map(res => res.text())
               .subscribe((res: any) => {

                    let access_token = '';
                    let parts = res.split('&');
                    for (let part of parts) {
                        if (part.indexOf('access_token') != -1) {
                            access_token = part.replace('access_token=', '');
                            break;
                        }
                    }
                   
                    if (access_token != '') {
                        console.log(access_token);
                        var credential = firebase.auth.GithubAuthProvider.credential(access_token);
                       
                        firebase.auth().signInWithCredential(credential).then(result => {

                            console.log("Firebase success: " + JSON.stringify(result));
                        
                            firebase.database().ref('users').set(result.uid,result);
                            resolve(result);
                             
                        }).catch((error:any) => {
                            // Handle Error s here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            // The email of the user's account used.
                            var email = error.email;
                            // The firebase.auth.AuthCredential type that was used.
                            var credential = error.credential;
                            // ...
                            reject("Error al iniciar sesión: " + errorMessage);
                        });
                    } else {
                        reject("El inicio de sesión con Github no fue autorizado.");

                    }

                }, (error: any) => {
                    reject("El inicio de sesión de Github fue cancelado");
                    console.log('post:error: ', error);
                });

            } else {
                let url = event.url;
                if (url.indexOf("client_id=38e68dbc2d4999af573e") == -1 && url.indexOf('github.com/session') == -1) {
                    s.browser.close();
                }
            }
        });
        s.browser.addEventListener("exit", function(event) {

            if (!ignorarExit) {
                console.log('exit: ', event);
                reject("El inicio de sesión de Github fue cancelado");
            }

            ignorarExit = false;
        });
    });
}

loginWithGithub() {
  
          this.showLoading();
  
          this.githubLogin().then(r => {
              console.log('success: ', r);
          }, e => {
  
              let alert = this.alertCtrl.create({
                  message: e,
                  buttons: [{
                      text: "Ok",
                      role: 'cancel'
                  }]
              });
              
              alert.present();
  
              this.loading.dismiss();
  
          })
}
showLoading(): Promise<any> {
  this.loading = this.loadingCtrl.create({
      content: 'Iniciando sesión...',
      dismissOnPageChange: true
  });
  return this.loading.present();
}

   google() {
     
    this.googlePlus.login({

    'webClientId': '548960747107-m3s482qrichiirr9erslo0qdivd9q0gb.apps.googleusercontent.com',
    'offline': true,

    }).then(res=>{
      const fire=firebase.auth.GoogleAuthProvider.credential(res.idToken);
      firebase.auth().signInWithCredential(fire).then(suc=>{


          alert("login");
         let loader = this.loadingCtrl.create({
          content: "Espere...",
          duration: 2600
        });
        loader.present();
       this.navCtrl.setRoot(TabsPage);
      }).catch(ns=>{
          let alert = this.alertCtrl.create({
          title: 'ERROR!',
          subTitle: 'Usuario y/o contraseña incorrectas!',
          buttons: ['OK']
          });
          alert.present();  
      })
    })
  }



  showAlertError(mensaje: string) {
    let alert = this.alertCtrl.create({
      title: 'ERROR!',
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }
  registro()
  {
    this.navCtrl.push(RegistroPage);
  }
}

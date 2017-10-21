import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams,ActionSheetController, LoadingController,AlertController, Platform } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthProvider, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class Login{

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, public platform : Platform, public actionsheetCtrl: ActionSheetController,public alertCtrl: AlertController)
   {

   }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }


  facebook(){
 
  }
  github(){
 
  }
  
  google(){
    const loading = this.loadingCtrl.create({
    content: 'Por favor, espere...'
    });
    loading.present();

  }
}
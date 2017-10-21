import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyABU4rSGpe9E5QfiOiAOB8Cxo1rlo6Hb8Q",
    authDomain: "segparcialionic.firebaseapp.com",
    databaseURL: "https://segparcialionic.firebaseio.com",
    projectId: "segparcialionic",
    storageBucket: "",
    messagingSenderId: "548960747107"
  };
  firebase.initializeApp(config);


  @NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),    
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

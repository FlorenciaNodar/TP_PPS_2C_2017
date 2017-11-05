import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { RegistroPage } from '../pages/registro/registro';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { Alumno } from '../pages/alumno/alumno';
import { EncuestaPage} from '../pages/encuesta/encuesta';
import { nuevoAlumno} from '../pages/nuevoAlumno/nuevoAlumno';
import { editarAlumno} from '../pages/editarAlumno/editarAlumno';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpModule } from '@angular/http';
import { UserData } from '../providers/userdata/userdata';
import { IonicStorageModule } from '@ionic/storage';
import { EncuestaDataProvider } from '../providers/encuesta-data/encuesta-data';
import { EncuestaHomePage } from '../pages/encuesta-home/encuesta-home';

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
    RegistroPage,
    HomePage,
    TabsPage,
    Login,
    Alumno,
    EncuestaPage,
    EncuestaHomePage,
    nuevoAlumno,
    editarAlumno
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: HomePage, name: 'Inicio', segment: 'inicio' },
        { component: Alumno, name: 'Alumno', segment: 'alumno' },
        { component: EncuestaHomePage, name: 'Encuesta', segment: 'encuesta' }
         ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    RegistroPage,
    HomePage,
    TabsPage,
    Login,
    Alumno,
    EncuestaPage,
    EncuestaHomePage,
    nuevoAlumno,
    editarAlumno,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    InAppBrowser,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserData,
    EncuestaDataProvider    
  ]
})
export class AppModule {}

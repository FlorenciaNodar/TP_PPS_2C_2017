import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AdmProf} from '../pages/admProf/admProf';
import { nuevoAdmProf} from '../pages/nuevoAdmProf/nuevoAdmProf';
import { editarAdmProf} from '../pages/editarAdmProf/editarAdmProf';
import { ListasPage } from '../pages/listas/listas';
import { CodigoAlumnos } from '../pages/codigoAlumnos/codigoAlumnos';

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
import { EncuestaEnviarPage } from '../pages/encuesta-enviar/encuesta-enviar';
import { AsistenciaModalPage } from '../pages/asistencia-modal/asistencia-modal';
import { AsistenciDataProvider } from '../providers/asistencia-data/asistencia-data';
import { EncuestaDetallePage } from '../pages/encuesta-detalle/encuesta-detalle';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';

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
    editarAlumno,
    EncuestaEnviarPage,
    AsistenciaModalPage,
    EncuestaDetallePage,
    AdmProf,
    nuevoAdmProf,
    editarAdmProf,
    ListasPage,
    CodigoAlumnos
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    NgxQRCodeModule,
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
    EncuestaEnviarPage,
    AsistenciaModalPage,
    EncuestaDetallePage,
    AdmProf,
    nuevoAdmProf,
    editarAdmProf,
    ListasPage,
    CodigoAlumnos
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
    EncuestaDataProvider,
    AsistenciDataProvider,
    BarcodeScanner 
  ]
})
export class AppModule {}

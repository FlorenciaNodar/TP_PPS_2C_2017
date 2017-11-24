import { Component, ViewChild } from '@angular/core';
import { AlertController,Platform, MenuController, Nav, Events} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

//Vistas
import { Login } from '../pages/login/login';
import { Graficos } from '../pages/graficos/graficos';
import { AboutPage } from '../pages/about/about';
import { RegistroPage } from '../pages/registro/registro';
import { HomePage } from '../pages/home/home';
import { EncuestaPage } from '../pages/encuesta/encuesta';

import { UserData } from '../providers/userdata/userdata';
import { Alumno } from '../pages/alumno/alumno';
import { EncuestaHomePage } from '../pages/encuesta-home/encuesta-home';
import { nuevoAlumno } from '../pages/nuevoAlumno/nuevoAlumno';
import { editarAlumno } from '../pages/editarAlumno/editarAlumno';
import{ Push, PushToken } from '@ionic/cloud-angular';
import * as firebase from 'firebase/app';
import { PerfilPage } from '../pages/perfil/perfil';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  isAppInitialized: boolean = false;
  user: any;
  private platformReady = false;
  private authReady = false;
  rootPage: any;
  pages: PageInterface[] = [
    
    { title: 'Inicio', name: 'TabsPage', component: TabsPage, tabComponent: HomePage, index: 0, icon: 'pie' },
    { title: 'Alumno', name: 'TabsPage', component: TabsPage, tabComponent: Alumno, index: 1, icon: 'school' },
    { title: 'Encuesta', name: 'TabsPage', component: TabsPage, tabComponent: EncuestaHomePage, index: 2, icon: 'clipboard' }

  ];

  pagesLog: PageInterface[] = [
    { title: 'Perfil', name: 'Perfil',  component: PerfilPage, icon: 'body' },
    { title: 'Logout', name: 'Login', component: Login, icon: 'log-out', logsOut: true }
  ];

  constructor(public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public events: Events,
    public userData: UserData,
    public splashScreen: SplashScreen, public push: Push, public alertCtrl: AlertController) {

      
      platform.ready().then(() => {
        console.log('platformReady');

        statusBar.styleDefault();
        this.platformReady = true;
        this.hideSplashScreen();
    });
    
    // qué elementos del menú deben estar ocultos según el estado de inicio de sesión actual 
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });
    this.enableMenu(true);

    this.listenToLoginEvents();

    if (platform.is('android')) {
    this.RegisterNotification();
    this.Notification();
    }

  }

  hideSplashScreen() {

    //if (this.platformReady && this.authReady) {
    
        setTimeout(() => {
          this.splashScreen.hide();
        }, 100);  
     //}
  }
  private RegisterNotification(){
  
  this.push.register().then((t: PushToken) => {
    return this.push.saveToken(t);
  }).then((t: PushToken) => {
    console.log('Token saved:', t.token);
  });
}

  private Notification(){
  
  this.push.rx.notification()
  .subscribe((msg) => {

         let alert = this.alertCtrl.create({
            title: msg.title,
            subTitle: msg.text,
            buttons: ['OK']
          });
          alert.present();
  });
}

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn: boolean) {
    //this.menu.enable(!loggedIn, 'loggedInMenu');
    this.menu.enable(loggedIn, 'loggedOutMenu');
  }

  openPage(page: PageInterface) {

    this.menu.close();
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index };
    }

    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
      console.log("LLego");
    } else {
 
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(err);
      });
    }

    if (page.logsOut === true) {
      console.log("Logout");
      this.userData.logout();
      firebase.auth().signOut();
    }
  }


  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }

  ngOnInit() {
   
      this.userData.getUsername().then(user => {
                console.log('authReady');
                
                this.hideSplashScreen();
    
                console.log('MyApp :: authState: ', user);
    
                this.rootPage = Login;
  
            }, error => {
                this.rootPage = Login;
            });
        }
        
}

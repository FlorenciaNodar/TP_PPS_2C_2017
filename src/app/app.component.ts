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
import { AdmProf } from '../pages/admProf/admProf';
import { UserData } from '../providers/userdata/userdata';
import { Alumno } from '../pages/alumno/alumno';
import { EncuestaHomePage } from '../pages/encuesta-home/encuesta-home';
import { nuevoAlumno } from '../pages/nuevoAlumno/nuevoAlumno';
import { editarAlumno } from '../pages/editarAlumno/editarAlumno';
import{ Push, PushToken } from '@ionic/cloud-angular';
import * as firebase from 'firebase/app';
import { PerfilPage } from '../pages/perfil/perfil';
import { Content } from 'ionic-angular'; 


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
  @ViewChild(Content) component: Content;

  isAppInitialized: boolean = false;
  user: any;
  private platformReady = false;
  private authReady = false;
  rootPage: any;
  pages: PageInterface[];
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
  ionViewCanEnter() {
    this.cargarMenu();
    this.events.subscribe('user:created', (user) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.user = user;
      console.log('Welcome', user);
    });
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

cargarMenu(){
  this.events.subscribe('user:created', (user) => {
  if(user == 'administrativo@administrativo.com')
  {
    this.pages= [
      
      { title: 'Inicio', name: 'Inicio', component: TabsPage, tabComponent: HomePage, index: 0, icon: 'pie' },
      { title: 'QR', name: 'QR', component: TabsPage, tabComponent: Alumno, index: 1, icon: 'barcode' },
      { title:'Graficos' , name: 'Graficos', component: TabsPage, tabComponent: EncuestaHomePage, index: 2, icon: 'podium' },
      { title: 'Alumnos' , name: 'Alumnos', component: TabsPage, tabComponent: AdmProf, index: 3, icon: 'school' },
      { title:'Listas', name: 'Listas', component: TabsPage, tabComponent: nuevoAlumno, index: 4, icon: 'clipboard' }
    ];
  }
  if(user == 'profesor@profesor.com')
  {
    this.pages= [
      
      { title: 'Inicio', name: 'Inicio', component: TabsPage, tabComponent: HomePage, index: 0, icon: 'pie' },
      { title: 'QR', name: 'QR', component: TabsPage, tabComponent: Alumno, index: 1, icon: 'barcode' },
      { title:'Graficos' , name: 'Graficos', component: TabsPage, tabComponent: EncuestaHomePage, index: 2, icon: 'podium' },
      { title: 'Encuesta' , name: 'Encuesta', component: TabsPage, tabComponent: AdmProf, index: 3, icon: 'clipboard' }
      
    ];
  }
  if(user == 'alumno@alumno.com')
  {
    this.pages= [
      
      { title: 'Inicio', name: 'Inicio', component: TabsPage, tabComponent: HomePage, index: 0, icon: 'pie' },
      { title: 'QR', name: 'QR', component: TabsPage, tabComponent: Alumno, index: 1, icon: 'barcode' },
      { title:'Graficos' , name: 'Graficos', component: TabsPage, tabComponent: EncuestaHomePage, index: 2, icon: 'podium' } 
    ];
  }
  if(user == 'administrador@administrador.com')
  {
    this.pages= [
      
      { title: 'Inicio', name: 'Inicio', component: TabsPage, tabComponent: HomePage, index: 0, icon: 'pie' },
      { title: 'QR', name: 'QR', component: TabsPage, tabComponent: Alumno, index: 1, icon: 'barcode' },
      { title:'Graficos' , name: 'Graficos', component: TabsPage, tabComponent: EncuestaHomePage, index: 2, icon: 'podium' },
      { title: 'Admin/Prof' , name: 'Admin/Prof', component: TabsPage, tabComponent: AdmProf, index: 3, icon: 'ribbon' }
      
    ];
  }
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
    this.events.subscribe('user:created', (user) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.user = user;
      console.log('Welcome', user);
      console.log('user', this.user);
    });
  }

  enableMenu(loggedIn: boolean) {
    //this.menu.enable(!loggedIn, 'loggedInMenu');
    this.menu.enable(loggedIn, 'loggedOutMenu');
  }

  openPage(page: PageInterface) {
    // the nav component was found using @ViewChild(Nav)
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    this.menu.close();

    let params = {};
    
        if (page.index) {
          params = { tabIndex: page.index };
        }
    
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
          
          this.nav.getActiveChildNavs()[0].select(page.index);
          
          console.log("LLego");
        }else {
      this.nav.setRoot(page.component).catch(() => {
        console.log("Didn't set nav root");
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

  this.cargarMenu();
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

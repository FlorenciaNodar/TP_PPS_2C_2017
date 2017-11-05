import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav , Events} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

//Vistas
import { Login } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { RegistroPage } from '../pages/registro/registro';
import { HomePage } from '../pages/home/home';
import { UserData } from '../providers/userdata/userdata';
import { EncuestaPage } from '../pages/encuesta/encuesta';
import { Alumno } from '../pages/alumno/alumno';
import { EncuestaHomePage } from '../pages/encuesta-home/encuesta-home';

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
  rootPage:any = Login;

  pages: PageInterface[] = [
    
    { title: 'Inicio', name: 'TabsPage', component: TabsPage, tabComponent: HomePage, index: 0, icon: 'pie' },
    { title: 'Alumno', name: 'TabsPage', component: TabsPage, tabComponent: Alumno, index: 1, icon: 'school' },
    { title: 'Encuesta', name: 'TabsPage', component: TabsPage, tabComponent: EncuestaHomePage, index: 2, icon: 'clipboard' }
  ];

  pagesLog: PageInterface[] = [
    { title: 'Logout', name: 'Login', component: Login, icon: 'log-out', logsOut: true }
  ];

  constructor(public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public events: Events,
    public userData: UserData,
    public splashScreen: SplashScreen) {

    // qué elementos del menú deben estar ocultos según el estado de inicio de sesión actual 
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });
    this.enableMenu(false);

    this.listenToLoginEvents();
  }
  

  initializeApp() {
    this.platform.ready().then(() => {
    
      //this.statusBar.styleDefault();
      this.splashScreen.hide();
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
    
  }
  
}

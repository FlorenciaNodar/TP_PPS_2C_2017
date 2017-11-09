import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { RegistroPage } from '../registro/registro';
import { HomePage } from '../home/home';
import { Alumno } from '../alumno/alumno';
import { ListasPage } from '../listas/listas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = RegistroPage;
  tab4Root = Alumno;
  tab5Root = ListasPage;

  constructor() {

  }
}

import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { RegistroPage } from '../registro/registro';
import { HomePage } from '../home/home';


import { Alumno } from '../alumno/alumno';
import { EncuestaPage } from '../encuesta/encuesta';
import { EncuestaHomePage } from '../encuesta-home/encuesta-home';
import { AdmProf } from '../admProf/admProf';

import { ListasPage } from '../listas/listas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = HomePage;  
  tab2Root = Alumno;
  tab3Root = EncuestaHomePage;
  tab4Root = AdmProf;
  tab5Root = ListasPage;


  constructor() {

  }
}

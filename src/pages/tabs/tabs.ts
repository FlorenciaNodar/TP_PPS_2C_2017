import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { RegistroPage } from '../registro/registro';
import { HomePage } from '../home/home';
import { EncuestaPage } from '../encuesta/encuesta';

import { Alumno } from '../alumno/alumno';
import { EncuestaPage } from '../encuesta/encuesta';
import { EncuestaHomePage } from '../encuesta-home/encuesta-home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

<<<<<<< Updated upstream

  tab1Root = HomePage;  
  tab2Root = Alumno;
  tab3Root = EncuestaHomePage;
  

=======
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = RegistroPage;
  tab4Root = EncuestaPage;
>>>>>>> Stashed changes

  constructor() {

  }
}

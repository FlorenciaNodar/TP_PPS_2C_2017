import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { RegistroPage } from '../registro/registro';
import { HomePage } from '../home/home';
import { EncuestaPage } from '../encuesta/encuesta';


import { Alumno } from '../alumno/alumno';
import { EncuestaHomePage } from '../encuesta-home/encuesta-home';
import { AdmProf } from '../admProf/admProf';
import { CodigoAlumnos } from '../codigoAlumnos/codigoAlumnos';
import { CodigoProfesoresPage } from '../codigo-profesores/codigo-profesores';
import { ListasPage } from '../listas/listas';
import { Graficos } from '../graficos/graficos';
import { PerfilPage } from '../perfil/perfil';
import { Login } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = HomePage;  
  tab2Root = Alumno;
  tab3Root = EncuestaHomePage;
  tab4Root = AdmProf;
  tab5Root = ListasPage;
  tab6Root = CodigoAlumnos;
  tab7Root = Graficos;
  tab8Root = CodigoProfesoresPage;
  
  constructor() {

  }
}

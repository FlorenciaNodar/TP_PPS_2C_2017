import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { RegistroPage } from '../registro/registro';
import { HomePage } from '../home/home';
import { EncuestaPage } from '../encuesta/encuesta';


import { Alumno } from '../alumno/alumno';
import { EncuestaHomePage } from '../encuesta-home/encuesta-home';
import { AdmProf } from '../admProf/admProf';
import { CodigoAlumnos } from '../codigoAlumnos/codigoAlumnos';
import { ListasPage } from '../listas/listas';
import { Graficos } from '../graficos/graficos';
import { PerfilPage } from '../perfil/perfil';
import { Login } from '../login/login';
import firebase from 'firebase';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  
  user;
  tab1Root;
  tab2Root;
  tab3Root;
  tab4Root;
  tab5Root;
  tab6Root;
  tab7Root; 

  constructor() {
    this.user = firebase.auth().currentUser.email;

  if(this.user == 'profesor@profesor.com'){
    this.tab1Root = HomePage;  
    this.tab2Root = Alumno;
    this.tab3Root = EncuestaHomePage;
    this.tab4Root = AdmProf;
    this.tab5Root = ListasPage;
    this.tab6Root = CodigoAlumnos;
    this.tab7Root = Graficos;  
  } else {
    this.tab1Root = HomePage;  
    this.tab2Root = Alumno;
    this.tab4Root = AdmProf;
    this.tab5Root = ListasPage;
    this.tab6Root = CodigoAlumnos;
    this.tab7Root = Graficos;  
  }
    
  }

   
  
}

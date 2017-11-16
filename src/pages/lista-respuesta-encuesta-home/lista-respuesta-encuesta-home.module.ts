import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaRespuestaEncuestaHomePage } from './lista-respuesta-encuesta-home';

@NgModule({
  declarations: [
    ListaRespuestaEncuestaHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ListaRespuestaEncuestaHomePage),
  ],
})
export class ListaRespuestaEncuestaHomePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RespuestaEncuestaHomePage } from './respuesta-encuesta-home';

@NgModule({
  declarations: [
    RespuestaEncuestaHomePage,
  ],
  imports: [
    IonicPageModule.forChild(RespuestaEncuestaHomePage),
  ],
})
export class RespuestaEncuestaHomePageModule {}

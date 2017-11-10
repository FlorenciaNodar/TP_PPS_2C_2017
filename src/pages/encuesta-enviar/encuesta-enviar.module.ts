import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncuestaEnviarPage } from './encuesta-enviar';

@NgModule({
  declarations: [
    EncuestaEnviarPage,
  ],
  imports: [
    IonicPageModule.forChild(EncuestaEnviarPage),
  ],
})
export class EncuestaEnviarPageModule {}

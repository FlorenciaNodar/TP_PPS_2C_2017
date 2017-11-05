import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncuestaHomePage } from './encuesta-home';

@NgModule({
  declarations: [
    EncuestaHomePage,
  ],
  imports: [
    IonicPageModule.forChild(EncuestaHomePage),
  ],
})
export class EncuestaHomePageModule { 
}

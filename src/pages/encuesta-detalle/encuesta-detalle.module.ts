import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncuestaDetallePage } from './encuesta-detalle';

@NgModule({
  declarations: [
    EncuestaDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(EncuestaDetallePage),
  ],
})
export class EncuestaDetallePageModule {}

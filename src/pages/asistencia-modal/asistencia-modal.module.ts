import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AsistenciaModalPage } from './asistencia-modal';

@NgModule({
  declarations: [
    AsistenciaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AsistenciaModalPage),
  ],
})
export class AsistenciaModalPageModule {}

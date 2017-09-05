import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlocoPage } from './bloco';

@NgModule({
  declarations: [
    BlocoPage,
  ],
  imports: [
    IonicPageModule.forChild(BlocoPage),
  ],
})
export class BlocoPageModule {}

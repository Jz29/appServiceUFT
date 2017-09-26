import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OrdemProvider } from '../../providers/ordem/ordem';

@IonicPage()
@Component({
  selector: 'page-bloco',
  templateUrl: 'bloco.html',
  providers: [
    OrdemProvider
  ]
})
export class BlocoPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ordemProvider: OrdemProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlocoPage');
  }

}

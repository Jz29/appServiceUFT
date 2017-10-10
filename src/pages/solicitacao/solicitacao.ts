import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SolicitacaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitacao',
  templateUrl: 'solicitacao.html',
})
export class SolicitacaoPage {

  item: any;

  constructor(
    public navCtrl: NavController,
    public navParametros: NavParams)
    {
      this.item = navParametros.data;
      console.log(this.item);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitacaoPage');
  }

}

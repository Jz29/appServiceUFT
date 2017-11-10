import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

import { OrdemProvider } from '../../providers/ordem/ordem';

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {

  items: FirebaseListObservable<any[]>;
  lab: any;

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams,
    public ordemProvider: OrdemProvider) {
      this.items = ordemProvider.getOrdem();
  }

  ionViewDidLoad() { }

  rm(card) {
    let i = this.actionSheetCtrl.create({
      title: 'Informar',
      buttons: [
        {
          text: 'Concluído',
          icon: 'thumbs-up',
          handler: () => {
            this.lab = card.sala;
            this.lab.aula = card.aula;
            this.lab.responsavel = card.responsavel;
            this.lab.horario = this.hora();
            this.ordemProvider.updateSala(card.numero, this.lab);
            this.ordemProvider.removeOrdem(card.$key);
          }
        },
        {
          text: 'Descartar',
          icon: 'remove',
          handler: () => {
            this.ordemProvider.removeOrdem(card.$key);
          }
        }
      ]
    });
    i.present();
  }

  hora() : string {
    var hora = "";
    var d = new Date();
    if ( d.getMinutes() < 10 )
      hora = d.getHours().toString() + ":0" + d.getMinutes().toString();
    hora = d.getHours().toString() + ":" + d.getMinutes().toString();

    return hora;
  }
}

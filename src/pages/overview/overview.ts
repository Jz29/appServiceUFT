import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

import { OrdemProvider } from '../../providers/ordem/ordem';

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {

  it: any;
  items: FirebaseListObservable<any[]>;
  obj = {
    "NomeBloco": "none",
    "NumeroSala": 0,
    "TipoSala": "none",
    "Agendado": false,
    "Dia": "none",
    "Horario": "none",
    "Descricao": "none",
    "Situacao": "none",
    "Ar": "Desligado",
    "DataShow": "Desligado",
    "StatusSala": "Trancado",
    "img": "assets/image/estudanteIcone.png"
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ordemProvider: OrdemProvider) {
      this.items = ordemProvider.getOrdem("/Ordens/");
  }

  ionViewDidLoad() { }

  atualizar() {
    this.items.push(this.obj);
  }

}

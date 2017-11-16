import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

import { HomePage } from '../home/home';

import { OrdemProvider } from '../../providers/ordem/ordem';
import { AuthService } from '../../providers/auth/auth-service';    // providers

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
    private authService: AuthService,
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
    var hora: number, min: number;
    var tempo = "";
    var d = new Date();

    hora = d.getHours();
    min = d.getMinutes();
    if ( hora == 0 )
      tempo = "00:";
    else if ( hora < 10 )
      tempo = "0" + hora.toString() + ":";
    else
      tempo = hora.toString() + ":";

      if ( min == 0 )
        tempo = tempo + "00";
      else if ( min < 10 )
        tempo = tempo + "0" + min.toString();
      else
        tempo = tempo + min.toString();

    return tempo;
  }

  sair() {
    this.authService.signOutFireAuth();
    this.navCtrl.setRoot(HomePage);
  }
}

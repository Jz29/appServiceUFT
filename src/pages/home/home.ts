import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

import { OrdemProvider } from '../../providers/ordem/ordem';

import { SolicitacaoPage } from '../solicitacao/solicitacao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: FirebaseListObservable<any[]>;
  postagem: {};
  blocoIndice: string = "Bloco 3";
  dia: any;
  horario: any;

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public ordemProvider: OrdemProvider){ }

  ionViewDidLoad() {
    this.items = this.ordemProvider.getOrdem("/Salas/bloco/3/salas");
  }

  mudarBloco() {
    let mb = this.actionSheetCtrl.create({
      title: 'Ir para:',
      buttons: [
        {
          text: 'Bloco 3',
          handler: () => {
            this.blocoIndice = "Bloco 3";
            console.log('Bloco trocado: ' + this.blocoIndice);
          }
        },
        {
          text: 'Bloco 4',
          handler: () => {
            this.blocoIndice = "Bloco 4";
            console.log('Bloco trocado: ' + this.blocoIndice);
          }
        }
      ]
    });
    mb.present();
  }

  informar(item) {
    let i = this.actionSheetCtrl.create({
      // title: 'Informar',
      buttons: [
        {
          text: 'Em aula',
          icon: 'code-working',
          handler: () => {
            // Comando atualizar (SET)
            item.situacao = "Em Aula";
            console.log(item);
            // this.ordemProvider.setOrdem("/Ordens/", item);
          }
        },
        {
          text: 'Livre',
          icon: 'code',
          handler: () => {
            // Comando atualizar (SET)
            item.situacao = "Livre";
            console.log(item);
          }
        },
        {
          text: 'Abrir/Destrancar',
          icon: 'unlock',
          handler: () => {
            //
          }
        },
        {
          text: 'Fechar/Trancar',
          icon: 'lock',
          handler: () => {
            //
          }
        },
        {
          text: 'Ocupado',
          icon: 'alert',
          handler: () => {
            //
          }
        },
        {
          text: 'Outros',
          icon: '',
          handler: () => {
            this.navCtrl.push(SolicitacaoPage);
          }
        }
      ]
    });
    i.present();
  }

}

















/*  OBTER UM COMPONENTE PELO ID
  mostrar(){
    var div = document.getElementById(""+this.divIndice)  // obtem a DIV pelo ID
    if (div.style.display == 'none')                      // se conteúdo está escondido
        div.style.display = 'block';                      // mostra o conteúdo
    else                                                  // se conteúdo está a mostra
        div.style.display = 'none';                       // esconde o conteúdo
  }

  atualizar(){
   //  this.items = this.ordemProvider.getOrdem();
   this.postagem = {
     identificacao: {
       nomeBloco: "Bloco 3",
       numeroSala: 10,
       tipoSala: "Laboratorio"
     },
     conteudo: {
       agendado: false,
       dia: "string",
       horario: "string",
       descricao: "Descrição"
     },
     status: {
       statusAula: "Livre",
       ar: false,
       dataShow: false,
       statusSala: false
     }
   }

   this.ordemProvider.setOrdem("/Ordens", this.postagem);
  }
*/
// jsonFireBase: {
//   listaLab : [5,9,10,11,12],
//   listaSalas : [26,39],
//   Salas: [{
//     "Sala" : {
//       "tipo" : "Laboratório",
//       "numero" : "",
//       "responsavel" : "none",
//       "aula" : "none",
//       "descricao" : "none",
//       "situacao" : "none",
//       "dia" : "none",
//       "hora" : "none"
//     }}]
// };

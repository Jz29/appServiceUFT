import { Component } from '@angular/core';
import { NavController, ActionSheetController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

import { OrdemProvider } from '../../providers/ordem/ordem';
import { AuthService } from '../../providers/auth/auth-service';

import { SolicitacaoPage } from '../solicitacao/solicitacao';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: FirebaseListObservable<any[]>;
  postagem: {};
  blocoIndice: string = "Bloco 3";
  toast: any;
  usuario: any;

  constructor(
    public navCtrl: NavController,
    private conta: AuthService,
    public navParametros: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private toastCtrl: ToastController,
    public ordemProvider: OrdemProvider)
    {
      this.items = ordemProvider.getSalas();
    }

  ionViewDidLoad() {}

  mudarBloco() {
    let mb = this.actionSheetCtrl.create({
      title: 'Ir para:',
      buttons: [
        {
          text: 'Bloco 3',
          handler: () => {
            // this.blocoIndice = "Bloco 3";
          }
        },
        {
          text: 'Bloco 4 (Indisponivel)',
          handler: () => {
            // this.blocoIndice = "Bloco 4";
          }
        }
      ]
    });
    mb.present();
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

  informar(e, sala) {
    let i = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Em aula',
          icon: 'code-working',

          handler: () => {
            // Qual aula e professor
            this.ordemProvider.updateSala(sala.$key, { "aula": "Em Aula", "atualizado": this.hora() } );
          }
        },
        {
          text: 'Livre',
          icon: 'code',
          handler: () => {
            // sala.aula = "Livre";
            sala.atualizado = this.hora();
            this.ordemProvider.updateSala(sala.$key, { "aula": "Livre", "atualizado": sala.atualizado } );
          }
        },
        {
          text: 'Trancar',
          icon: 'lock',
          handler: () => {
            let obj = {
              "tipo": sala.tipo,
              "numero": sala.numero,
              "aula": "Fechada",
              "responsavel": "",
              "dia": "Hoje",
              "horario": this.hora(),
              "ar": "Desligar",
              "dataShow": "Desligar",
              "pedido": "Trancar",
              "img": "assets/image/estudanteIcone.png",
              "sala": sala
            };
            this.ordemProvider.setOrdem(obj);
          }
        },
        {
          text: 'Destrancar',
          icon: 'unlock',
          handler: () => {
            let obj = {
              "tipo": sala.tipo,
              "numero": sala.numero,
              "aula": "Livre",
              "responsavel": "",
              "dia": "Hoje",
              "horario": this.hora(),
              "ar": "Ligar",
              "pedido": "Destrancar",
              "img": "assets/image/estudanteIcone.png",
              "sala": sala
            };
            this.ordemProvider.setOrdem(obj);
          }
        },
        {
          text: 'Outros',
          icon: 'more',
          handler: () => {
            this.navParametros.data = sala;
            this.navCtrl.push(SolicitacaoPage);
          }
        },
        {
          text: "Cancelar",
          role: 'cancel'
        }
      ]
    });
    i.present();
  }

  ultimaAtualizacao(sala) {
    this.toast = this.toastCtrl.create({ duration: 1500, position: 'bottom' });
    if ( sala.atualizado != "" ) {
      this.toast.setMessage( "Última atualização as: " + sala.atualizado );
    }
    else
      this.toast.setMessage( "Sem informações de atualização" );

    this.toast.present();
  }

  quadro_De_Avisos() {
    this.navCtrl.push(ListPage);
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

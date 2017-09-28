import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

import { OrdemProvider } from '../../providers/ordem/ordem';

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

 mudarBloco(){
   let actionSheet = this.actionSheetCtrl.create({
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
   actionSheet.present();
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

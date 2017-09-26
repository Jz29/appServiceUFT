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
  blocoIndice: string = "Bloco 3";
  dia: any;
  horario: any;
  // items =  [{sala: 'lab 11', ar: 'ligado', ds: 'ligado'},
  //           {sala: 'sala 39', ar: 'desligado', ds: 'desligado'},
  //           {sala: 'lab 5', ar: 'ligado', ds: 'desligado'}];

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public ordemProvider: OrdemProvider){}

  ionViewDidLoad() {}

  mudarBloco() {
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

 atualizar(){
   this.items = this.ordemProvider.getOrdem();
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
*/

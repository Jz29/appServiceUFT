import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  blocoIndice: string = "Bloco 3";

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {}

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

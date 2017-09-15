import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../providers/auth/auth-service';    // providers
import { User } from '../../providers/auth/user';                   // providers
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-criar-conta',
  templateUrl: 'criar-conta.html',
})
export class CriarContaPage {

  user: User = new User();                 // providers
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  criarConta(){                           // BOTÃO DE CRIAR CONTA
    alert("Conta criada com sucesso!");
    this.navCtrl.setRoot(HomePage);
  }

}

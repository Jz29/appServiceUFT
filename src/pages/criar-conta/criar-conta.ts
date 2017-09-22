import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
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
    public navParams: NavParams,
    private authService: AuthService,
    private toastCtrl: ToastController,
    private carregarCtrl: LoadingController) {
  }

  criarConta(){                           // BOTÃO DE CRIAR CONTA
    let carregando = this.carregarCtrl.create({
      content: "Entrando...",
      duration: 1500
    });

    if (this.user.email.indexOf('@') == -1)                   // COMPLETA O EMAIL COM @uft.edu.br
      this.user.email = this.user.email + '@uft.edu.br'

    this.authService.createUser(this.user)
    .then(() => {
      carregando.present();
      this.navCtrl.setRoot(HomePage);
    })
    .catch((error: any) => {                                    // se der erro
      let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
      if (error.code == 'auth/invalid-email') {                 // email invalido
        toast.setMessage('O e-mail digitado não é valido.');
      } else if (error.code == 'auth/user-disabled') {          // usuario ja autenticado ou desabilitado
        toast.setMessage('O usuário está desativado.');
      } else if (error.code == 'auth/user-not-found') {         // usuario nao encontrado
        toast.setMessage('O usuário não foi encontrado.');
      } else if (error.code == 'auth/wrong-password') {         // senha fraca
        toast.setMessage('A senha digitada não é valida.');
      } else if (error.code == 'auth/email-already-in-use') {
        toast.setMessage('Usuário já existe.');
      }

      toast.present();
    });

  }

}

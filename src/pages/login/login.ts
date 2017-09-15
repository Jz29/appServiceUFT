import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../providers/auth/auth-service';    // providers
import { User } from '../../providers/auth/user';                   // providers
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User = new User();                 // providers
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private authService: AuthService,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn() {
    if (this.form.form.valid) {                                     // se o formulario for valido
      this.authService.signIn(this.user)
        .then(() => {                                               // se login aceito
          this.navCtrl.setRoot(HomePage);                           // entra na pagina Home
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
          }
          toast.present();
        });
    }
  }

}

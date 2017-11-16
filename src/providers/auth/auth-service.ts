import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  conta: any = null;
  blockLogin: boolean = false;

  constructor(
    private autenticacaoAF: AngularFireAuth) {
    this.autenticacaoAF.authState.subscribe((auth) => { // aguarda receber AUTH
              this.conta = auth;
              console.log(this.conta.providerData[0]);
            });
  }

  get authenticated(): boolean {
    return this.conta !== null;
  }

  get usuario(): any {
    return this.conta ? this.conta : null;
  }

  get nome(): string {
    if ( this.conta )
      return this.conta.displayName;
    return null;
  }

  signOutFireAuth(): void {
    this.autenticacaoAF.auth.signOut();
  }

  createUser(user: User) {
    return this.autenticacaoAF.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  signIn(user: User) {
    return this.autenticacaoAF.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  // signOut() : firebase.Promise<any> {
  //   if (this.autenticacaoAF.auth.currentUser.providerData.length) {
  //     for (var i = 0; i < this.autenticacaoAF.auth.currentUser.providerData.length; i++) {
  //       var provider = this.autenticacaoAF.auth.currentUser.providerData[i];
  //     }
  //   }
  //
  //   return this.signOutFirebase();
  // }
  //
  // private signOutFirebase() {
  //   return this.autenticacaoAF.auth.signOut();
  // }
  //
  // resetPassword(email: string) {
  //   return this.autenticacaoAF.auth.sendPasswordResetEmail(email);
  // }
}

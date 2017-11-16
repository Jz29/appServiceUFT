import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { BlocoPage } from '../pages/bloco/bloco';
import { OverviewPage } from '../pages/overview/overview';
import { SolicitacaoPage } from '../pages/solicitacao/solicitacao';
import { TabsPage } from '../pages/tabs/tabs';

import { AuthService } from '../providers/auth/auth-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = TabsPage;
  rootPage: any = HomePage;
  nome: string;

  public pages: Array<{title: string, component: any, icon: string}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    private conta: AuthService,
    public splashScreen: SplashScreen) {

    this.initializeApp();

    this.pages = [
      { title: 'Página Inicial', component: HomePage, icon: "home" },
      { title: 'Gerenciar', component: LoginPage, icon: "clipboard" }];
      // { title: 'Overview', component: OverviewPage, icon: "list" },
      // { title: 'Segment', component: ListPage, icon: "list" },
      // { title: 'Solicitação', component: SolicitacaoPage, icon: "clipboard" }

    this.nome = this.conta.nome;
    console.log("CONSTRUTOR", this.nome);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if ( this.nav.getActive().component.name != page.component.name ) {
      if ( page.component == HomePage )
        this.nav.goToRoot(HomePage);
      else if ( page.component == LoginPage && this.conta.authenticated )
        this.nav.setRoot(OverviewPage);
      else
        this.nav.push(page.component);
    }
    this.nome = this.conta.nome;
    // console.log("DE: ", this.nav.getActive().component.name);   // pagina atual
    // console.log("PARA: ", page.component.name);
  }

  feedback() {
    if ( this.nav.getActive().component.name != BlocoPage.name )
      this.nav.push(BlocoPage);
  }
}

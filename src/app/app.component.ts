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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  // rootPage: any = SolicitacaoPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {

    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: "home" },
      { title: 'Login', component: LoginPage, icon: "log-in" },
      { title: 'Lista de Blocos', component: BlocoPage, icon: "albums" },
      { title: 'Overview', component: OverviewPage, icon: "list" },
      { title: 'Solicitação', component: SolicitacaoPage, icon: "clipboard" }];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.push(page.component);     // COMANDO PARA NAVEGAR ENTRE PAGINAS
  }
}

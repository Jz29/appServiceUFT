import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthService } from '../providers/auth/auth-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { CriarContaPage } from '../pages/criar-conta/criar-conta';
import { BlocoPage } from '../pages/bloco/bloco';
import { OverviewPage } from '../pages/overview/overview';
import { SolicitacaoPage } from '../pages/solicitacao/solicitacao';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OrdemProvider } from '../providers/ordem/ordem';
import { HttpModule } from '@angular/http';

const firebaseConfig = {                                // snippet de configuração do FireBase do projeto appUFT
  apiKey: "AIzaSyCR_SaXc0J27h0CfQ-yiUsrnALC5QUdEPk",
  authDomain: "appuftservice.firebaseapp.com",
  databaseURL: "https://appuftservice.firebaseio.com",
  projectId: "appuftservice",
  storageBucket: "appuftservice.appspot.com",
  messagingSenderId: "866532634170"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    BlocoPage,
    CriarContaPage,
    OverviewPage,
    SolicitacaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    BlocoPage,
    CriarContaPage,
    OverviewPage,
    SolicitacaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OrdemProvider,
    AuthService
  ]
})
export class AppModule {}

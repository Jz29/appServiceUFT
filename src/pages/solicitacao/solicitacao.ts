import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-solicitacao',
  templateUrl: 'solicitacao.html',
})
export class SolicitacaoPage {

  aparelhos: boolean = true;
  agendamento: boolean = false;
  ar: boolean = false;
  ds: boolean = false;
  dia: string = null;
  hora: string = null;
  outros: string = null;
  d: any;

  constructor(
    public navCtrl: NavController,
    public navParametros: NavParams) { }

  enviar() {
    // this.dia = this.d;
    console.log(
      this.aparelhos,
      this.agendamento,
      this.ar,
      this.ds,
      this.outros,
      this.d,
      this.dia,
      this.hora);
  }

  esconder_mostrar() {
    this.aparelhos = !(this.aparelhos);
    this.agendamento = !(this.agendamento);
    this.ar = false;
    this.ds = false;
    this.outros = null;
    this.dia = null;
    this.hora = null;
  }
}

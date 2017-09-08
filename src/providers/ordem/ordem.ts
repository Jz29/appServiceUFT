import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the OrdemProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OrdemProvider {

  num: number=1001;
  ordemDB={
    nomeBloco: "string",    // Ex: 3
    numeroSala: 10,         // Ex: 10
    tipoSala: "string",     // Ex: Labim ou Sala
    statusSala: "string",   // Ex: Em aula
    ar: false,              // Ex: ligado ou desligado
    dataShow: false,        // Ex: ligado ou desligado
    agendado: false,        // Ex: Sim ou Não
    data: "string",         // Ex: 12/10/2017 se agendado
    horario: "string",      // Ex: 08h00 se agendado
    salaAberta: false,      // Ex: Sim ou Não
  }

  constructor(public http: Http) {
    console.log('Hello OrdemProvider Provider');
  }

  getOrdem(){
    return this.ordemDB;
  };

  setOrdem(d){
    this.ordemDB = d;
  }

}

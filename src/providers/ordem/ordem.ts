import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrdemProvider {

  ordemDB={
    nomeBloco: "Bloco 3",   // Ex: 3
    numeroSala: 10,         // Ex: 10
    tipoSala: "Laboratorio",// Ex: Labim ou Sala
    statusAula: "Livre",    // Ex: Em aula, livre, agendado
    ar: false,              // Ex: ligado ou desligado
    dataShow: false,        // Ex: ligado ou desligado
    agendado: false,        // Ex: Sim ou Não
    dia: "string",          // Ex: 12/10/2017 se agendado
    horario: "string",      // Ex: 08h00 se agendado
    statusSala: false };   // Ex: Sim ou Não

  constructor(){}

  getOrdem(){
    return this.ordemDB;
  };

  setOrdem(d){
    this.ordemDB = d;
  }

}

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class OrdemProvider {

  ordensDB: FirebaseListObservable<any[]>;
  salasDB: FirebaseListObservable<any[]>;
  pathOrdens: string = "/Ordens/";
  pathSalas: string = "/Salas/bloco/3/salas";

  constructor(
    private angularFireAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private fb: FirebaseApp)
    {
        this.ordensDB = db.list(this.pathOrdens);
        this.salasDB = db.list(this.pathSalas);
    }

  getOrdem() {
    this.ordensDB = this.db.list(this.pathOrdens);
    return this.ordensDB;
  }

  getSalas() {
    this.salasDB = this.db.list(this.pathSalas);
    return this.salasDB;
  }

  setOrdem(postagem: any) {
    this.ordensDB = this.db.list(this.pathOrdens);
    this.ordensDB.push( postagem );
  }

  setSala(postagem: any) {
    this.salasDB = this.db.list(this.pathSalas);
    this.salasDB.push( postagem );
  }

  updateOrdem(key: any, up: any) {
    this.ordensDB = this.db.list(this.pathOrdens);
    this.ordensDB.update( key, up );
  }

  updateSala(key: any, up: any) {
    this.salasDB = this.db.list(this.pathSalas);
    this.salasDB.update( key, up );
  }

  removeOrdem(itemKey: any) {
    this.ordensDB = this.db.list(this.pathOrdens);
    this.ordensDB.remove(itemKey);
  }

  removeSala(itemKey: any) {
    this.salasDB = this.db.list(this.pathSalas);
    this.salasDB.remove(itemKey);
  }

}

// ordemDB={
//   nomeBloco: "Bloco 3",   // Ex: 3
//   numeroSala: 10,         // Ex: 10
//   tipoSala: "Laboratorio",// Ex: Labim ou Sala
//   statusAula: "Livre",    // Ex: Em aula, livre, agendado
//   ar: false,              // Ex: ligado ou desligado
//   dataShow: false,        // Ex: ligado ou desligado
//   agendado: false,        // Ex: Sim ou Não
//   dia: "string",          // Ex: 12/10/2017 se agendado
//   horario: "string",      // Ex: 08h00 se agendado
//   statusSala: false };    // Ex: Sim ou Não

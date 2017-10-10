import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class OrdemProvider {

  ordemDB: FirebaseListObservable<any[]>;
  path: string = "/Ordens/";

  constructor(
    private angularFireAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private fb: FirebaseApp)
    {
        this.ordemDB = db.list(this.path);
    }

  getOrdem(path: string){
    this.ordemDB = this.db.list(path);
    return this.ordemDB;
  };

  setOrdem(path: string, postagem: any){
    this.ordemDB = this.db.list(path);
    this.ordemDB.push( postagem );
  }

  // updateOrdem(path: string, up: any){
  //   this.ordemDB = this.db.list(path);
  //   this.ordemDB.update( up );
  // }


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

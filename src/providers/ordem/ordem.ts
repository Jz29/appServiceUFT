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
  anyDB: FirebaseListObservable<any[]>;
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

  getJson(path: string) {
    this.anyDB = this.db.list(path);
    return this.anyDB;
  }

  setJson(path: string, postagem: any) {
    this.anyDB = this.db.list(path);
    this.anyDB.push( postagem );
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

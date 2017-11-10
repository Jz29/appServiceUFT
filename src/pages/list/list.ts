import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

import { OrdemProvider } from '../../providers/ordem/ordem';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  salas: FirebaseListObservable<any[]>;
  lab: string = "laboratorio";

  item: {} = [
    {
      "disciplina":"Álgebra Linear",
      "professor":"Helena Cristina",
    },
    {
      "disciplina":"Banco de Dados",
      "professor":"Ary Henrique",
    },
    {
      "disciplina":"Cálculo Diferencial e Integral I",
      "professor":"Helena Cristina",
    },
    {
      "disciplina":"Cálculo Diferencial e Integral II",
      "professor":"Rogerio",
    },
    {
      "disciplina":"Cálculo Numérico",
      "professor":"Andréas",
    },
    {
      "disciplina":"Compiladores",
      "professor":"Alexandre Rossini",
    },
    {
      "disciplina":"Computação Gráfica",
      "professor":"Wosley",
    },
    {
      "disciplina":"Engenharia de Software",
      "professor":"Edeilson",
    },
    {
      "disciplina":"Ética e Legislação",
      "professor":"Karina",
    },
    {
      "disciplina":"Física Teórica e Experimental I",
      "professor":"Marcelo Leineker",
    },
    {
      "disciplina":"Física Teórica e Experimental II",
      "professor":"Marcelo Leineker",
    },
    {
      "disciplina":"Inteligência Artificial",
      "professor":"Glenda Botelho",
    },
    {
      "disciplina":"Introdução à Ciência da Computação",
      "professor":"Juliana",
    },
    {
      "disciplina":"Introdução à Programação",
      "professor":"Ana Paula",
    },
    {
      "disciplina":"Linguagens de Programação",
      "professor":"Tiago Almeida",
    },
    {
      "disciplina":"Lógica Matemática",
      "professor":"Ana Paula",
    },
    {
      "disciplina":"Matemática Discreta",
      "professor":"-",
    },
    {
      "disciplina":"Métodos Computacionais Aplicados à Engenharia",
      "professor":"Ana Paula",
    },
    {
      "disciplina":"Organização de Computadores",
      "professor":"Tiago Almeida",
    },
    {
      "disciplina":"Pesquisa Operacional",
      "professor":"Marcelo Lisboa",
    },
    {
      "disciplina":"Probabilidade e Estatística",
      "professor":"-",
    },
    {
      "disciplina":"Processamento de Imagens",
      "professor":"Glenda Botelho",
    },
    {
      "disciplina":"Programação orientada a Objetos",
      "professor":"Glenda Botelho",
    },
    {
      "disciplina":"Projeto de Banco de Dados",
      "professor":"Edeilson",
    },
    {
      "disciplina":"Projeto e Análise de Algoritmos",
      "professor":"Warley Gramacho",
    },
    {
      "disciplina":"Segurança e Auditoria de Sistemas",
      "professor":"David Prata",
    },
    {
      "disciplina":"Sistemas Digitais",
      "professor":"Tiago Almeida",
    },
    {
      "disciplina":"Sistemas Operacionais",
      "professor":"Tiago Magalhães",
    },
    {
      "disciplina":"Teoria da Computação, Linguagens Formais e Autômatos",
      "professor":"Alexandre Rossini",
    },
    {
      "disciplina":"Teoria e Algoritmos dos Grafos",
      "professor":"George Brito",
    },
    {
      "disciplina":"Tópicos Avançados em Ciência da Computação",
      "professor":"Ana Paula"
    }
  ]

  constructor(
    public navCtrl: NavController,
    public ordemProvider: OrdemProvider)
  {
      this.salas = this.ordemProvider.getSalas();
  }
}

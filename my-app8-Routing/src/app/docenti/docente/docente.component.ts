import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit{

  //1. se devo prendere un param dinamico mi conviene farlo all'OnInit
  //2. devo fare l'injection di ActivatedRoute per poter pescare il parametro dinamico

  docente: {
    id: number,
    nome: string,
    materia: string
  }

  constructor(private route: ActivatedRoute){

  }


  ngOnInit(): void {
    this.docente = {
      id: this.route.snapshot.params['id'],
      nome: this.route.snapshot.params['nome'],
      materia: this.route.snapshot.params['materia']
    }

    // Per poter raccogliere il parametro che sta arrivando grazie alla rotta devo fare il subscribe a quei dati
    this.route.params
    .subscribe(
      (params: Params) => {
        this.docente.id = params['id'];
        this.docente.nome = params['nome'];
        this.docente.materia = params['materia']
      }
    )

  }

}

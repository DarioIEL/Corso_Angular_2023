import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentiService } from '../studenti.service';

@Component({
  selector: 'app-studente',
  templateUrl: './studente.component.html',
  styleUrls: ['./studente.component.css']
})
export class StudenteComponent implements OnInit {

  studente: {
    id: number,
    nome: string,
    corso: string
  }

  constructor(private route: ActivatedRoute, private serviceStudenti: StudentiService){
  }

  ngOnInit(): void {
    // Metto + qui davanti perché l'id è una string, quando lo prendo dallo URL, ma a me serve un number. Questo perché getStudenteById accetta solo number
    const idStud = +this.route.snapshot.params['id'];

    this.studente = this.serviceStudenti.getStudenteById(idStud);

    this.route.params
    .subscribe(
      (params: Params) => {
        this.studente = this.serviceStudenti.getStudenteById(+params['id']);
      }
    )
  }
}

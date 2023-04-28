import { Component, OnInit } from '@angular/core';
import { StudentiService } from './studenti.service';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent implements OnInit{

  studenti: {
    id: number,
    nome: string,
    corso: string
  }[] = []

  //mi servono gli studenti -> DI del service
  constructor(private serviceStudenti: StudentiService){

  }

  ngOnInit(): void {
    this.studenti = this.serviceStudenti.studenti;
  }
}

import { Component } from '@angular/core';
import { Studente } from 'src/app/models/studente.model';
import { StudentiService } from 'src/app/services/studenti.service';

@Component({
  selector: 'app-studente-info',
  templateUrl: './studente-info.component.html',
  styleUrls: ['./studente-info.component.css']
})
export class StudenteInfoComponent {

  singoloStudente: Studente;
  matricola: number;

  constructor(private studentiService: StudentiService){

  }


  onStampaInfo(){
    // let studente = this.studentiService.descriviStudente(4);
    // console.log(studente);
    this.singoloStudente = this.studentiService.descriviStudente(this.matricola);
  }


}

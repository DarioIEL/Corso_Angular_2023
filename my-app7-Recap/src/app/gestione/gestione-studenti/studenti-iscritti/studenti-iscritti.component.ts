import { Component } from '@angular/core';
import { Studente } from 'src/app/models/studente.model';
import { StudentiService } from 'src/app/services/studenti.service';

@Component({
  selector: 'app-studenti-iscritti',
  templateUrl: './studenti-iscritti.component.html',
  styleUrls: ['./studenti-iscritti.component.css']
})
export class StudentiIscrittiComponent {

  listaStudenti: Studente[];

  constructor(private studentiService: StudentiService){
    this.listaStudenti = studentiService.mieiStudenti;
  }
}

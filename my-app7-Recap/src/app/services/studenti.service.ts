import { Injectable } from '@angular/core';
import { Studente } from '../models/studente.model';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {

  mieiStudenti: Studente[] = [
    new Studente(1, "Laura", "Bianchi", ['Ang1', "Java0", "HtCs3"]),
    new Studente(2, "Paolo", "Verdi", ['Ang1', "Java0", "HtCs3"]),
    new Studente(3, "Maria", "Gialli", ['Ang2', "Js0", "HtCs3"]),
    new Studente(4, "Marco", "Marchi", ['Ang1', "Java0", "HtCs3"]),
    new Studente(5, "Luisa", "Rossi", ['Ang1', "Java0", "HtCs3"])
  ];


  constructor() { }

  // Questo metodo mi restituisce un singolo studente in base alla sua matricola
  descriviStudente(matricola: number): Studente{
      let indice = matricola - 1;
      let mioStudente = this.mieiStudenti[indice];
      return mioStudente;
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {

  studenti: {
    id: number,
    nome: string,
    corso: string
  }[] = [
    {
      id: 1,
      nome: "Pippo Rossi",
      corso: "Angular"
    },
    {
      id: 2,
      nome: "Laura Bianchi",
      corso: "Javascript"
    },
    {
      id: 3,
      nome: "Maria Verdi",
      corso: "JAVA"
    },
  ]

  constructor() { }

  //Restituisce tutti gli studenti
  getStudenti(){
    return this.studenti;
  }

  //restituisce un singolo studente attraverso l'id
  getStudenteById(id: number){
    const studente = this.studenti.find(
      (stud) => {
        return stud.id === id
      }
    )
    return studente
  }


}

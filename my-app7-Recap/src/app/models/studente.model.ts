export class Studente{
  matricola: number;
  nome: string;
  cognome: string;
  codCorsi: string[];

  constructor(matricola: number, nome: string, cognome: string, codCorsi: string[]){
    this.matricola = matricola;
    this.nome = nome;
    this.cognome = cognome;
    this.codCorsi = codCorsi;
  }
}

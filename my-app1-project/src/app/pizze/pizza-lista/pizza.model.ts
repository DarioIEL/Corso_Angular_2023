import { Pizzaiolo } from "./pizzaiolo.model";

// il model è una classe che definisce prop e metodi delle sue istanze
export class Pizza{
  nome: string;
  descrizione: string;
  immagine: string;

  pizzaiolo: Pizzaiolo;

  constructor(nome: string, descrizione: string, immagine: string,
    pizzaiolo: Pizzaiolo){

    this.nome = nome;
    this.descrizione = descrizione;
    this.immagine = immagine;
    this.pizzaiolo = pizzaiolo
  }

  // compraPizza(){
  //   console.log("Stai acquistando la pizza " this.nome);
  // }
}

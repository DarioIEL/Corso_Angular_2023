export class Panino{
  nome: string;
  toppings: string;
  prezzo: number;

  constructor(nome: string, toppings: string, prezzo: number){
    this.nome = nome;
    this.toppings = toppings;
    this.prezzo = prezzo;
  }
}

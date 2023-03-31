export class User{
  nome: string;
  cognome: string;
  tipo: string;
  id: number;
  status: string;

  constructor(nome: string, cognome: string, tipo: string, id:number, status: string){
    this.nome = nome;
    this.cognome = cognome;
    this.tipo = tipo;
    this.id = id;
    this.status = status;
  }
}

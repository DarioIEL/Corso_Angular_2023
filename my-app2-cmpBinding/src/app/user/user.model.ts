export class User{
  nome: string;
  cognome: string;
  tipo: string;
  id: number;
  status: string;
  dispo: boolean;

  constructor(nome: string, cognome: string, tipo: string, id:number, status: string, dispo: boolean){
    this.nome = nome;
    this.cognome = cognome;
    this.tipo = tipo;
    this.id = id;
    this.status = status;
    this.dispo = dispo;
  }
}

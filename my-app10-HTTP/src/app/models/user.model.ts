export class User{
  nome: string;
  ruolo: string;
  password: boolean;
  id?: number;

  constructor(nome: string, ruolo: string, password: boolean, id?: number){
    this.nome = nome;
    this.ruolo = ruolo;
    this.password = password;
    this.id = id;
  }


}

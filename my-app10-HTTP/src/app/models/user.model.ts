export class User{
  id: number;
  nome: string;
  ruolo: string;
  password: boolean;

  constructor(id: number, nome: string, ruolo: string, password: boolean){
    this.id = id;
    this.nome = nome;
    this.ruolo = ruolo;
    this.password = password;
  }


}

export class User{
  nome: string;
  status: "Active" | "Inactive"

  constructor(nome: string, status: "Active" | "Inactive"){
    this.nome = nome;
    this.status = status;
  }
}

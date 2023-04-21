export class Account{

  nome: string;
  username: string;
  tipo: "Admin" | "Supervisor" | "Basic";
  id: number;

  constructor(nome: string, username: string, tipo: "Admin" | "Supervisor" | "Basic" , id:number){
    this.nome= nome;
    this.username = username;
    this.tipo = tipo;
    this.id = id;
  }


}

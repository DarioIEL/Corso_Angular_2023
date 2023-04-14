//Creo la classe piana (è una classe senza Decorator) che rappresenterà il tipo di dato
export class User{
  nome: String;
  cognome: String;
  eta?: Number

  //definisco un costruttore, il quale verrà invocato solo all'utilizzo della parola chiave new User(.........)

  constructor(nome:
    String, cognome: String, eta?: Number){
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
  }

}

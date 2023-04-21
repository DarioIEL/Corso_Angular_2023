import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class PrimoServiceService {

  constructor() { }

  //un metodo del mio service
  scriviInConsole(){
    console.log("Ciao dal service !");
  }

  scriviInConsole2(nome: string){
    console.log("Ciao " + nome);
  }

  salutaUtente(nomeUtente: string): string {
    let saluto = "Ciao " + nomeUtente + " benvenuto!";
    return saluto;
  }

  utenti: User[] = [
    {
      nome:"Pippo",
      cognome: "Rossi",
      id: 1
    },
    {
      nome: "Anna",
      cognome: "Bianchi",
      id: 2
    },
    {
      nome: "Paola",
      cognome: "Verdi",
      id:3
    }
  ];


  private superUser: User;

  getSuperUser(): User{
    this.superUser = {
      nome: "Super",
      cognome: "Pippo",
      id: 0
    };
    return this.superUser;
  }

}

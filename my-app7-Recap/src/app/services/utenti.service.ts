import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  listaActiveUsers: User[] = [
    {
      nome: "Pippo",
      status: "Active"
    },
    {
      nome: "Mario",
      status: "Active"
    }
  ];

  listaInactiveUsers: User[] = [
    {
      nome: "Anna",
      status: "Inactive"
    },
    {
      nome: "Paola",
      status: "Inactive"
    }
  ];


  //Questo metodo assegna un utente in base alla selezione dello status quando compilo il form
  loggaUtente(user: User){
    // ......
  }

  setActive(id: number){

  }

  setInactive(id: number){

  }

  constructor() { }

}

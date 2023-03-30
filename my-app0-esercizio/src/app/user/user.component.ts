import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // nomeUser: string;
  idUser: number;
  status: string;

  // users: object[] = [];
  // users: {}[] =[];
  users: {
    nome: String,
    cognome: String
  }[] = [];

  mostra: boolean = false;

  numeri: number[] = [];

  persona: object = {};

  constructor(){
    // this.nomeUser = "Pippo";
    // this.idUser = 2;
    this.status = Math.random() > 0.5 ? "online": "offline";

    this.users = [
     {
       nome: "Pippo",
       cognome: "Rossi"
     },
     {
       nome: "Pluto",
       cognome: "Bianchi"
     },
     {
       nome: "Paperino",
       cognome: "Verdi"
     },
     {
       nome: "Dario",
       cognome: "Mennillo",
     }
    ];

    this.numeri = [1,2,4,5,76,4];
  }



}

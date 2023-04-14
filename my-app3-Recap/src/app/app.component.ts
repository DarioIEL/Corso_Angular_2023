import { Component, EventEmitter, Output } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  nomeUser: String = "";
  cognomeUser: String = "";
  etaUser: Number = 0;

  utente: User;

  @Output() onInviaUser = new EventEmitter<User>();

  //Questo metodo è legato all'evento (click)
  onAggiungiUser(){
    console.log("Sto inserendo un nuovo utente...");
    // console.log("Nome: " + this.nomeUser);
    // console.log("Cognome: " + this.cognomeUser);
    // console.log("Età: " + this.etaUser);

    // let utente: User = new User(this.nomeUser, this.cognomeUser, this.etaUser);

    this.utente = new User(this.nomeUser, this.cognomeUser, this.etaUser);


    console.log(this.utente);

    this.onInviaUser.emit(this.utente)
  }

  //Passare il nuovo utente al component lista-user
  //Trasformare la lista degli user una lista di componentUser
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  // nomeUser: String = "";
  // cognomeUser: String = "";
  // etaUser: Number = 0;

  utente: User;

  //Questo metodo è legato all'evento (click)
  onAggiungiUser(user: User){

    this.utente = user;
    console.log(user);
  }


}

import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  nomeUser: String = "";
  cognomeUser: String = "";
  etaUser: Number = 0;

  @Output() utenteCreato = new EventEmitter<User>;

  avviso: String = "";

  onAggiungiUser(){
    if(this.nomeUser == "" || this.cognomeUser == ""){
      this.avviso = "Hai compilato male uno tra nome e cognome";
    }else{
      this.avviso = "";
      let mioUser = new User(this.nomeUser, this.cognomeUser, this.etaUser);
      this.utenteCreato.emit(mioUser);
    }
  }

}

import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from "../models/account.model";
import { AccountsService } from '../service/accounts.service';

@Component({
  selector: 'app-nuovo-account',
  templateUrl: './nuovo-account.component.html',
  styleUrls: ['./nuovo-account.component.css']
})
export class NuovoAccountComponent {

  nome: string;
  username: string;
  tipo: "Admin" | "Supervisor" | "Basic";

  //inietto il service
  constructor(private serviceAcc: AccountsService){
  }

  onRegistraAccount(){
    let mioAccount = new Account(this.nome, this.username, this.tipo, 1);
    console.log(mioAccount);
    this.serviceAcc.aggiungiAccount(mioAccount);
  }


}

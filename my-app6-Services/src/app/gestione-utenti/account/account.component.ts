import { Component, Input } from '@angular/core';
import { Account } from '../models/account.model';
import { AccountsService } from '../service/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  @Input() account: Account;
  @Input() indice: number;


  constructor(private accountSer: AccountsService){

  }

  onModTipo(tipo: "Admin" | "Basic" |"Supervisor"){
    //questo metodo chiamerà un metodo del service per modificare il tipo di un singolo account
    this.accountSer.modificaTipo(tipo, this.indice);
  }

}

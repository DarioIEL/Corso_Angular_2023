import { Component, OnInit } from '@angular/core';
import { Account } from './models/account.model';
import { AccountsService } from './service/accounts.service';


@Component({
  selector: 'app-gestione-utenti',
  templateUrl: './gestione-utenti.component.html',
  styleUrls: ['./gestione-utenti.component.css']
})
export class GestioneUtentiComponent implements OnInit {

  listaAccount: Account[] = []

  constructor(private serviceAcc: AccountsService) {

  }

  ngOnInit(): void {
    this.listaAccount = this.serviceAcc.listaAccounts;
  }

}

import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() { }

  //Dati
  listaAccounts: Account[] = [];

  //metodi
  aggiungiAccount(account: Account){
    this.listaAccounts.push(account);
  }

  modificaTipo(tipo: "Supervisor" | "Basic" | "Admin", indice: number): void{
    this.listaAccounts[indice].tipo = tipo;
  }



}

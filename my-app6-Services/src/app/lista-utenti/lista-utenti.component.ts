import { Component, OnInit } from '@angular/core';
import { PrimoServiceService } from '../primo-service.service';
import { User } from '../user.model';

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.css']
})
export class ListaUtentiComponent implements OnInit {

  utenze: User[] = [];

  constructor(private mioService: PrimoServiceService){

  }

  ngOnInit(): void {
    this.utenze = this.mioService.utenti;

    let su = this.mioService.getSuperUser();
    console.log(su);

  }
}

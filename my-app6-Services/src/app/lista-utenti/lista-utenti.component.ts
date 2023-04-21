import { Component, OnInit } from '@angular/core';
import { PrimoServiceService } from '../primo-service.service';
import { AltroService } from '../services/altro.service';
import { User } from '../user.model';

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.css']
})
export class ListaUtentiComponent implements OnInit {

  utenze: User[] = [];

  //Posso iniettare più service nello stesso component
  constructor(private mioService: PrimoServiceService, private altroService: AltroService){

  }

  ngOnInit(): void {
    this.utenze = this.mioService.utenti;

    let su = this.mioService.getSuperUser();
    console.log(su);

    this.altroService.altroScriveInConsole("Mario");
  }
}

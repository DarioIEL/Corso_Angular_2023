import { Component } from '@angular/core';

@Component({
  selector: 'app-programmatore',
  templateUrl: './programmatore.component.html',
  styleUrls: ['./programmatore.component.css']
})
export class ProgrammatoreComponent {

  nome: string;
  cognome: string;
  area: string = "Backend";
  status: string = "online";

  constructor(){
    this.nome = "Laura";
    this.cognome = "Bianchi";
  }

}

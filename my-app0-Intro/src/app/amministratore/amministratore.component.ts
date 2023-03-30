import { Component } from '@angular/core';

@Component({
  selector: 'app-amministratore',
  templateUrl: './amministratore.component.html',
  styleUrls: ['./amministratore.component.css']
})
export class AmministratoreComponent {

  admin = {
    nome: "Paolo",
    cognome: "Bianchi",
    matricola: "A123",
    numUtenti: 10
  }



  nome?:string;
  adminStatus: string = "online";

  admins = [
    "Pippo",
    "Pluto",
    "Paperino"
  ];

  //Il costruttore viene invocato alla renderizzazione del component
  constructor(){
    this.nome = "Mario";
    //OPERATORE TERNARIO
    this.adminStatus = Math.random() > 0.5 ? "online" : "offline";

    //L'operatore ternario si può tradurre con un if
    // if(Math.random() > 0.5){
    //   this.adminStatus = "online";
    // }else{
    //   this.adminStatus = "offline";
    // }

  }

  getColor(){
    return this.adminStatus == "online" ? 'green': 'red';
  }

  getStatus(){
    return this.adminStatus;
  }

  getAdmins(){
    let elenco = ""
    this.admins.forEach(admin => {
      elenco += "<li> " + admin + " </li>";
    });

    return elenco;
  }


}

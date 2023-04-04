import { Component } from '@angular/core';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Input Output';

  nomeServer: string = "Server Test";
  numConn: number = 10;

  nomeServer2: string = "Server Build";
  numConn2: number = 25;

  listaServer: {
    nomeServer: string,
    numConn: number
  }[] =[
    {
      nomeServer: "Server Java",
      numConn: 30
    },
    {
      nomeServer: "Server Git",
      numConn: 100
    },
    {
      nomeServer: "Server ANGULAR",
      numConn: 15
    }
  ]


  //Per @Computer
  nomePc: string = "Dell";
  tipoPc: string = "Portatile";
  idPc: number = 1;


  //Per @User
  // user: User = {
  //   nome: "Anna",
  //   cognome: "Rossi",
  //   id: 1,
  //   tipo: "Admin",
  //   status: "online"
  // }


  users: User[] = [
    new User("Paolo", "Rossi", "Admin", 2, "offline", false),
    new User("Marco", "Mengoni", "Basic", 3, "online", false),
    new User("Pippo", "Baudo", "Admin", 4, "offline", false),
    new User("Paola", "Chiara", "Admin", 5, "online", true)
  ];

  nomeServerOUT: string;

  constructor(){
  }

  nuovoServer: {
    nomeServer: string,
    numConnServer: number
  };
  //onCreaServer deve rispettare la struttura dell'oggetto in output
  onCreaServer(server: {nomeServer: string, numConnServer: number}){

    console.log(server);
    this.nuovoServer = server
  }
}

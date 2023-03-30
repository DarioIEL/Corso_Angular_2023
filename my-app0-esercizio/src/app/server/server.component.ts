import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  nomeServer: string = "Server Esercizio";
  status: string;

  constructor(){
    this.status = Math.random() > 0.5 ? "online": "offline";
  }

  //da fare con un metodo
//   getStatus(){
//     let status = Math.random() > 0.5 ? "online": "offline";
//     this.status = status;
//     return status;
//  }

}

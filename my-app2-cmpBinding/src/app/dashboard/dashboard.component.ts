import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
// Voglio creare un server e passarlo all'esterno, quindi passarlo in Outpu
//La prop server deve essere "raccolta" in app component, component genitore
//Raccolgo questa prop con un custom event, quindi nel selettore di app dashboard prendo la prop in questo modo (server)="qualcosa"


@Output() onServer = new EventEmitter<{nomeServer: string, numConnServer: number}>();

nuovoNomeServer: string = "Server Pippo";
nuovonumConnServer: number = 1000;

constructor(){

}

onCreaServer(){
  this.onServer.emit({
    nomeServer: this.nuovoNomeServer,
    numConnServer: this.nuovonumConnServer
  });
}

}

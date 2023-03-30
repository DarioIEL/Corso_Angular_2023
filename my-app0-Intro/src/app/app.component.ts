import { Component } from '@angular/core';

//@Component è un decorator
@Component({
  //questo sarà il nome tag che utilizzo per poter renderizzare un component
  selector: 'app-root',
  //Il template è tutto l'HTML del mio component
  templateUrl: './app.component.html',
  //Array di fogli di stile legati solo ed esclusivamente a questo component
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //prop della classe
  titolo: string = "Questa è la prima APP";

  nomeCorso = "Programmatore Angular";

  numeroPartecipanti: number = 14;

  durataCorso: number = 240;

  nomeClasse: string = "";

  //metodo della classe
  scegliColore(){
    //variabile del metodo
    let numRand = Math.random();
    if(numRand < 0.5){
      return this.nomeClasse = "txtRed";
    }else{
      return this.nomeClasse = "txtBlue";
    }
  }



}

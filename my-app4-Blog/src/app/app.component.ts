import { Component } from '@angular/core';
import { Articolo } from './lista-articoli/articolo/articolo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app4-Blog';

  listaArticoliCreati: Articolo[] = []

  onRecuperaArticolo(articolo: Articolo){
    console.log(articolo);
    this.listaArticoliCreati.push(articolo);
  }


  onGetUser(nuovoUser: {
    username: string,
    cognome: string
  }){
    console.log("Questo è l'utente nella appComponent", nuovoUser);
  }

}

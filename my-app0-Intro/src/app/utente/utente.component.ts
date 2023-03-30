import { Component } from '@angular/core';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})
export class UtenteComponent {
  titolo: string = "App per gli Utenti";

  mioUtente = {
    nome: "Anna",
    cognome: "Rossi",
    id: 1,
    email: "anna.rossi@mail.it"
  }


}

import { Component, Input } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-lista-user',
  templateUrl: './lista-user.component.html',
  styleUrls: ['./lista-user.component.css']
})
export class ListaUserComponent {

  // @Input() nuovoUser: User;

  aggiungiUser(user: User){
    this.listaUtenti.push(user);
  }

  // listaUtenti = []

  // listaUtenti: String[] = [
  //   "Anna",
  //   "Paolo",
  //   "Maria",
  //   "Luca"
  // ]

  // listaUtenti: Object[] = [
  //   {
  //     nome: "Anna",
  //     cognome: "Verdi",
  //     eta: 20
  //   },
  //    {
  //     nome: "Paolo",
  //     cognome: "Rossi",
  //     eta: 20
  //   },
  //    {
  //     nome: "Maria",
  //     cognome: "Bianchi",
  //     eta: 20,
//       presenza: true
  //   },
  //    {
  //     nome: "Luca",
  //     cognome: "Neri",
  //     eta: 25
  //   },
  // ]

  //Definisco il tipo di dato "al volo"
  // listaUtenti: {
  //   nome: String,
  //   cognome: String,
  //   eta?: Number //per rendere opzionale una prop uso ?
  // }[] = [
  //   {
  //     nome: "Anna",
  //     cognome: "Verdi",
  //   },
  //    {
  //     nome: "Paolo",
  //     cognome: "Rossi",
  //     eta: 20
  //   },
  //    {
  //     nome: "Maria",
  //     cognome: "Bianchi",
  //     eta: 20
  //   },
  //    {
  //     nome: "Luca",
  //     cognome: "Neri",
  //     eta: 25
  //   },
  // ]

  //creo degli User con notazione letterale
  // listaUtenti: User[] = [
  //   {
  //     nome: "Anna",
  //     cognome: "Rossi",
  //     eta: 30
  //   },
  //   {
  //     nome: "Paolo",
  //     cognome: "Bianchi"
  //   },

  //   {
  //     nome: "Maria",
  //     cognome: "Verdi"
  //   },
  //   {
  //     nome: "Paola",
  //     cognome: "Gialli",
  //     eta: 25
  //   }

  // ]

// sto utilizzando la notazione con parola chiave new, quindi richiamo direttamente il metodo constructor()
  listaUtenti: User[] = [
    new User("Anna", "Verdi", 19),
    new User("Paolo", "Bianchi"),
    new User("Marco", "Gialli"),
    new User("Maria", "Neri")
  ]

  //valutazioni class CSS
  // Come è fatto Record
  //Difficile, più avanti
  // classiValutate = {
  //   'bg-danger': this.listaUtenti[1].eta > 20,
  //   'bg-info': this.listaUtenti[1].eta == null
  // };

  // valutaClass(){
  //   if(1<0){
  //     return "bg-info"
  //   }else{
  //     return "bg-danger"
  //   }
  // }



}

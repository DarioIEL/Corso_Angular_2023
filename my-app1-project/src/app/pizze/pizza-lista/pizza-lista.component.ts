import { Component } from '@angular/core';
import { Pizza } from './pizza.model';
import { Pizzaiolo } from './pizzaiolo.model';

@Component({
  selector: 'app-pizza-lista',
  templateUrl: './pizza-lista.component.html',
  styleUrls: ['./pizza-lista.component.css']
})
export class PizzaListaComponent {

  // pizzaiolo: {
  //   nome: string,
  //   cognome: string,
  //   stipendio: number
  // }

  pizzaiolo: Pizzaiolo;

  //definendo il tipo al volo definisco le prop dei miei oggetti
  // pizze: {
  //   nome: string,
  //   descrizione: string,
  //   immagine: string
  // } [] = []

  //utilizzo il model Pizza per definire il tipo di dato
  // pizze: Pizza [] = [{
  //     nome: "Margherita",
  //     descrizione: "Pomodoro, mozzarella, basilico, olioEvo",
  //     immagine: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg"
  //   },
  //   {
  //     nome: "Capriccciosa",
  //     descrizione: "Funghi, Patate, Prosciutto",
  //     immagine: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg"
  //   },
  //   {
  //     nome: "4 Formaggi",
  //     descrizione: "Gorgonzola, Asiago, Parmiggiano",
  //     immagine: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg"
  //   }
  // ]

  pizze: Pizza[] = []

  constructor() {

    // this.pizzaiolo = {
    //   nome: "Pippo",
    //   cognome: "ROssi",
    //   stipendio: 2400,
    // }

    this.pizzaiolo = new Pizzaiolo("Paolo", "Bianchi", 2400);

    // this.pizze = [
    //   new Pizza("Margherita", "Pomodoro Mozzarella Basilico", "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg"),
    //   new Pizza("Marinara", "Pomodoro aglio origano", "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg")
    // ]

    this.pizze = [
      {
        nome: "Margherita",
        descrizione: "Pomodoro Mozzarella BAsilico",
        immagine: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg",
        pizzaiolo: this.pizzaiolo
      },
      {
        nome: "Marinara",
        descrizione: "Pomodoro Aglio Origano",
        immagine: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg",
        pizzaiolo: {
          nome: "Gennaro",
          cognome: "Esposito",
          stipendio: 2500
        }
      }
    ]
  }
}

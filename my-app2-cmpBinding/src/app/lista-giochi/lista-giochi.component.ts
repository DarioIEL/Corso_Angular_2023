import { Component } from '@angular/core';
import { Gioco } from './gioco/gioco.model';

@Component({
  selector: 'app-lista-giochi',
  templateUrl: './lista-giochi.component.html',
  styleUrls: ['./lista-giochi.component.css']
})
export class ListaGiochiComponent {

listaGiochi: Gioco[] = [
  new Gioco("D&d", "Tavolo", true),
  new Gioco("PacMan", "console", true),
  new Gioco("TicTacToe", "Digitale", true ),
  new Gioco("Tetris", "digitale", false)
];


}

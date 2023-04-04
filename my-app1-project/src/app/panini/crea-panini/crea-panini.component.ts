import { Component, EventEmitter, Output } from '@angular/core';
import { Panino } from '../panino.model';

@Component({
  selector: 'app-crea-panini',
  templateUrl: './crea-panini.component.html',
  styleUrls: ['./crea-panini.component.css']
})
export class CreaPaniniComponent {

  nomePanino: string;
  toppings: string;
  prezzo: number;

  @Output() panino = new EventEmitter<Panino>();

  onCreaPanino(){
    this.panino.emit(
    //  {
    //   nome: this.nomePanino,
    //   toppings: this.toppings,
    //   prezzo: this.prezzo
    //  }
    // oppure
    new Panino(this.nomePanino, this.toppings, this.prezzo)
      );
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {

  //Prop di classe
  nomePizza: string;
  condimentoAgg: string;
  allergeni: string;

  pizze: {
    nome: string,
    condimento: string
  } [] = [];

  numPizze: number = 0;

  constructor(){

  }

  onReset(){
    this.nomePizza = "";
    this.condimentoAgg = "";
  }

  onAggiungiPizza(){
    let pizza = {
      nome: this.nomePizza,
      condimento: this.condimentoAgg
    }

    this.pizze.push(pizza);
    this.numPizze++;
    console.log(this.pizze);
  }

  onSearchPizza(){
    //logica del suggerimento
  }


  onSegnalaAllergia(){
    //colora di arancione il tag p nel quale vedo che pizza sto scegliendo e aggiunge, sempre al tag p uno span in cui vengono scritte le allergie del campo input
  }
}

import { Component, Input } from '@angular/core';
import { Articolo } from './articolo/articolo.model';

@Component({
  selector: 'app-lista-articoli',
  templateUrl: './lista-articoli.component.html',
  styleUrls: ['./lista-articoli.component.css']
})
export class ListaArticoliComponent {

  @Input() listaArticoliCreati: Articolo[];



}

import { Component, Input } from '@angular/core';
import { Panino } from '../panino.model';

@Component({
  selector: 'app-lista-panini',
  templateUrl: './lista-panini.component.html',
  styleUrls: ['./lista-panini.component.css']
})
export class ListaPaniniComponent {

  @Input() panino: Panino;
}

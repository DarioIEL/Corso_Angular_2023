import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent {

  @Input() nome: string;
  @Input() tipo: string;
  @Input() id: number;



}

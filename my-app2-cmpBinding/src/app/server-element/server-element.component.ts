import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {

  //con il decorator @Input() specifico che quella prop verrà ricevuta come Input dal parent

  @Input() nomeServerChild: string;

  @Input() numConnChild: number;

}

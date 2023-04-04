import { Component, Input } from '@angular/core';
import { Gioco } from './gioco.model';


@Component({
  selector: 'app-gioco',
  templateUrl: './gioco.component.html',
  styleUrls: ['./gioco.component.css']
})
export class GiocoComponent {

  @Input() gioco: Gioco;

  onModDispo(){
    this.gioco.dispo = !this.gioco.dispo;
  }

}

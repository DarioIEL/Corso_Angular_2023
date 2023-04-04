import { Component } from '@angular/core';
import { Panino } from './panino.model';

@Component({
  selector: 'app-panini',
  templateUrl: './panini.component.html',
  styleUrls: ['./panini.component.css']
})
export class PaniniComponent {

  panini: Panino[] = []

  onCreaPanino(panino: Panino){
    console.log("Panino in output", panino);
    this.panini.push(panino);
    console.log(this.panini);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-docenti',
  templateUrl: './docenti.component.html',
  styleUrls: ['./docenti.component.css']
})
export class DocentiComponent {

  docenti: {}[] = [
    {
      id: 1,
      nome: "Dario Mennillo",
      materia: "Angular"
    },
    {
      id:2,
      nome: "Davide Ghione",
      materia: "Html & CSS"
    },
    {
      id:3,
      nome: "Milo Spandre",
      materia: "JS"
    }
  ]

}

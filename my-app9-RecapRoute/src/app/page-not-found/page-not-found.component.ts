import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  messaggioDiErrore: string;

  constructor(private route: ActivatedRoute){

    this.route.data.subscribe(
      (data: Data) => {
        this.messaggioDiErrore = data['messaggio'];
      }
    )
  }

}

import { Component, Input } from '@angular/core';
import { Articolo } from './articolo.model';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent {

  @Input() singoloArticolo: Articolo;

  onVoteUp(){
    this.singoloArticolo.voteUp();
  }

  onVoteDown(){
    this.singoloArticolo.voteDown();
  }
}

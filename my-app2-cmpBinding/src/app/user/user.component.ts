import { Component, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() user: User;

  constructor(){
    console.log(this.user);
  }

  onModDispo(){
    this.user.dispo = !this.user.dispo
  }
}

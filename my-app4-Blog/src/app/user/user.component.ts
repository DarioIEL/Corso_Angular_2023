import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Output('uC') userCreated = new EventEmitter<{
    username: string,
    surname: string
  }>();

  onInviaUser(username: string, surname: string){
    console.log(username, surname);
    this.userCreated.emit({
      username: username,
      surname: surname
    });
  }
}

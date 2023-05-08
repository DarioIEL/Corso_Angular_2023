import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app10-HTTP';

  listaUtenti: User[] = []

  constructor(private userService: UsersService, private commService: CommentsService){
  }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(utenti => {
      this.listaUtenti = utenti;
    });

    //in questo caso il subscribe è già stato eseguito nel service quindi non devo più rifarlo
    this.commService.getCommenti();

    // this.commService.postCommento();
  }


  onAggiungiCommento(){
    this.commService.postCommento();
  }
}

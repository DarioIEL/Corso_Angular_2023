import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  //ENDOPOINT = dietro questo url troveremo i dati
  url = "http://localhost:3000/users";

  getUsers() {
    return this.http.get<User[]>(
      this.url
      ).pipe(
        map(responseDati =>{
        //   const arrayUser: User[] = [];

        //   responseDati.forEach(user=>{
        //     arrayUser.push(user);
        //   });

        //   return arrayUser;

        //oppure in questo caso
        return responseDati
      })
      )
  }





}

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

  postUser(nome: string, ruolo: string, password: boolean, id?: number){

    let utente: User = new User(nome, ruolo, password);

    //se faccio il subscribe all'interno del mio service non ho l'obbligo del return ----> return this.http.post(...)
    this.http.post(
      this.url,
      utente
    ).subscribe(()=>{
      console.log("Utente Aggiunto");
    })
  }


  deleteById(id: number){
  //se il subscribe lo eseguo nel component che utilizza il metodo sono obbligato ad utilizzare il return
   return this.http.delete(this.url + "/" + id);
  }
}

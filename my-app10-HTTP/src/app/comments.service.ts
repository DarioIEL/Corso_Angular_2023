import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  url = "http://localhost:3000/commenti";

  constructor( private http: HttpClient) {}


  getCommenti(){
    //il subscribe può essere eseguito anche direttamente nel service, quindi quando chiamo il metodo get di http
    return this.http.get(this.url).subscribe(commenti => {
      console.log(commenti);
    })
  }


  postCommento(){
    this.http.post(this.url,
    {
      bodyTxt: "Terzo Commento inserito"
    }
    ).subscribe(()=>{
      console.log("Commento aggiunto");
    })
  }

  }

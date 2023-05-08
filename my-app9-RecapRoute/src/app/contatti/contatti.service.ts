import { Injectable } from '@angular/core';
import { Contatto } from '../models/contatto.model';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {

  private listaContatti: Contatto[] = [
    {
      id: 0,
      nome: "Dario Mennillo",
      numTel: "12345665"
    },
    {
      id: 1,
      nome: "Davide Ghione",
      numTel: "0987654"
    }
  ];

  getListaContatti(): Contatto[]{
      return this.listaContatti;
  }

  getContattoById(id: number){
    const contatto = this.listaContatti.find(
     (cont) => {
        return cont.id === id
      }
    )
    return contatto;

    // let contatto = {};
    // for(var i = 0; i < this.listaContatti.length; i++){
    //   if(this.listaContatti[i].id === id){
    //     contatto = this.listaContatti[i];
    //     return contatto;
    //   }
    // }

  }

  deleteContatto(id: number){

  }

  constructor() { }
}

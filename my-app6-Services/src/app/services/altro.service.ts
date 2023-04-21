import { Injectable } from '@angular/core';
import { PrimoServiceService } from '../primo-service.service';

@Injectable({
  providedIn: 'root'
})
export class AltroService {

  //Posso iniettare un service dentro l'altro
  constructor(private mioService: PrimoServiceService) {

  }

  altroScriveInConsole(nomeAltro: string){
    this.mioService.scriviInConsole2(nomeAltro);
  }

}

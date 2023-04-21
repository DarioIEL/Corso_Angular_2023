import { Component, OnInit } from '@angular/core';
import { PrimoServiceService } from './primo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my app Servizi';
  saluto: string;

  //per poter utilizzare i metodi del mio service devo attuare il sistema della dependency injection, cioè passare un parametro private al costruttore del component che vuole utilizzare i metodi
  constructor(private mioService: PrimoServiceService){

    //qui utilizzo i metodi del Service
    mioService.scriviInConsole();
    mioService.scriviInConsole2(this.title);

  }

  //posso utilizzare i metodi di mioService dove mi pare, anche in altri metodi
  salutaUtente(){
    this.saluto = this.mioService.salutaUtente("Dario");
  }

  onSalutaUtenteAlClick(){
    this.mioService.scriviInConsole2("Dario");
  }
  //metodo di OnInit -> Lifecycle del component. Il metodo ngOnInit "lancia" prop e metodi nel momento in cui renderizzo il component
  ngOnInit(): void {
    this.salutaUtente();
  }


}

import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PrimoServiceService } from './primo-service.service';
import { AltroService } from './services/altro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'my app Servizi';
  saluto: string;

  //per poter utilizzare i metodi del mio service devo attuare il sistema della dependency injection, cioè passare un parametro private al costruttore del component che vuole utilizzare i metodi
  constructor(private mioService: PrimoServiceService, private altroService: AltroService){

    //qui utilizzo i metodi del Service
    mioService.scriviInConsole();
    mioService.scriviInConsole2(this.title);
    altroService.altroScriveInConsole("Pippo");

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

  ngOnChanges(changes: SimpleChanges): void {

  }

}

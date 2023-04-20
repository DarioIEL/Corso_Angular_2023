import { Component, EventEmitter, Output } from '@angular/core';
import { Articolo } from '../lista-articoli/articolo/articolo.model';


@Component({
  selector: 'app-form-inserimento',
  templateUrl: './form-inserimento.component.html',
  styleUrls: ['./form-inserimento.component.css']
})
export class FormInserimentoComponent {

  titolo: string = "";
  link: string = "";
  voto: number = 0;

  formCompleto: boolean ;

  //articleCreated è l'alias di creatoreDiArticolo. Nel richiamare l'evento sul selettore di form inserimento dovrò usare l'alias
  @Output('articleCreated') creatoreDiArticolo = new EventEmitter<Articolo>();

  onInviaArticolo(){
    if(this.titolo != "" && this.link != "" ){

      this.formCompleto = true;
      let mioArticolo = new Articolo(this.titolo, this.link, this.voto);
      this.creatoreDiArticolo.emit(mioArticolo);

      this.titolo = "";
      this.link = "";

    }else{
      this.formCompleto= false;
    }

  }

}

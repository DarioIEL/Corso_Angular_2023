import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContattiService } from '../contatti.service';
import { Contatto } from 'src/app/models/contatto.model';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.scss']
})
export class ContattoComponent implements OnInit, OnChanges{

  contatto: Contatto;


  //dentro contattoComponent vado a leggere la rotta, cioè il path per acquisire dati, informazioni e altro

  constructor(private route: ActivatedRoute,
    private router: Router,
    private serviceContatti: ContattiService){ }

    ngOnChanges(): void {
      if(this.contatto){
        console.log("Sta cambiando qualccosa nel contatto");

      }
    }


    //per leggere l'id preso dalla rotta sfrutto ngOnInit
    ngOnInit(): void {

      let idContatto = +this.route.snapshot.params['id'];
      this.serviceContatti.getContattoById(idContatto);

      //faccio il subscribe ai parametri della rotta
      //OSS: tutte le volte che recupero una porzione di URLpath sto recuperando delle stringhe ----> metto + dopo l'assegnazione --> Casting cafone stringa verso number
      this.route.params
        .subscribe(
          (params: Params) => {
            idContatto = +params['id'];
            console.log("Stai recuperando questo id: " , idContatto);
            console.log(typeof idContatto);
            this.contatto = this.serviceContatti.getContattoById(idContatto);
          }
        );

    }

}

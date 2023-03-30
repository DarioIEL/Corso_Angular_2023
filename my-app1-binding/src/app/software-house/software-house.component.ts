import { Component } from '@angular/core';

@Component({
  selector: 'app-software-house',
  templateUrl: './software-house.component.html',
  styleUrls: ['./software-house.component.css']
})
export class SoftwareHouseComponent {

  permettiNuovoDeveloper: boolean = false;

  nomeDeveloper:string = "Fabio";
  devCreated:boolean = false;

  developers: string[] = [
    "Pippo",
    "Paperino",
    "Pluto"
  ]

  constructor(){

    setTimeout( () => {
      this.permettiNuovoDeveloper = true;
    }, 5000);

  }



  onCreaDev(){
    this.nomeDeveloper = "Bill Gates";
    this.developers.push(this.nomeDeveloper);
    this.devCreated = true;
  }

  onModNomeDeveloper(event: any){
    console.log(event);
    console.log(event.target.value);

    // this.nomeDeveloper = event.target.value;
    this.nomeDeveloper = (<HTMLInputElement>event.target).value;
  }

}

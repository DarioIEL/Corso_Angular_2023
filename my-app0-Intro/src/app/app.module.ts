import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UtenteComponent } from './utente/utente.component';
import { AmministratoreComponent } from './amministratore/amministratore.component';


@NgModule({
  declarations: [
    AppComponent,
    UtenteComponent,
    AmministratoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

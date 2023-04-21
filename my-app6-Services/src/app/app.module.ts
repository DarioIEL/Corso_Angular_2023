import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaUtentiComponent } from './lista-utenti/lista-utenti.component';
import { GestioneUtentiComponent } from './gestione-utenti/gestione-utenti.component';
import { NuovoAccountComponent } from './gestione-utenti/nuovo-account/nuovo-account.component';
import { AccountComponent } from './gestione-utenti/account/account.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaUtentiComponent,
    GestioneUtentiComponent,
    NuovoAccountComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

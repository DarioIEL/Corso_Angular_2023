import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaUtentiComponent } from './lista-utenti/lista-utenti.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUtentiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormInserimentoComponent } from './form-inserimento/form-inserimento.component';
import { ListaArticoliComponent } from './lista-articoli/lista-articoli.component';
import { ArticoloComponent } from './lista-articoli/articolo/articolo.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    FormInserimentoComponent,
    ListaArticoliComponent,
    ArticoloComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

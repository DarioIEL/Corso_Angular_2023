import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PizzeComponent } from './pizze/pizze.component';
import { PizzaListaComponent } from './pizze/pizza-lista/pizza-lista.component';
import { PizzaItemComponent } from './pizze/pizza-lista/pizza-item/pizza-item.component';
import { PizzaDettaglioComponent } from './pizze/pizza-dettaglio/pizza-dettaglio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PizzeComponent,
    PizzaListaComponent,
    PizzaItemComponent,
    PizzaDettaglioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

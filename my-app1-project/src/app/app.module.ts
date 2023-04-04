import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PizzeComponent } from './pizze/pizze.component';
import { PizzaListaComponent } from './pizze/pizza-lista/pizza-lista.component';
import { PizzaItemComponent } from './pizze/pizza-lista/pizza-item/pizza-item.component';
import { PizzaDettaglioComponent } from './pizze/pizza-dettaglio/pizza-dettaglio.component';
import { PaniniComponent } from './panini/panini.component';
import { ListaPaniniComponent } from './panini/lista-panini/lista-panini.component';
import { CreaPaniniComponent } from './panini/crea-panini/crea-panini.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PizzeComponent,
    PizzaListaComponent,
    PizzaItemComponent,
    PizzaDettaglioComponent,
    PaniniComponent,
    ListaPaniniComponent,
    CreaPaniniComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

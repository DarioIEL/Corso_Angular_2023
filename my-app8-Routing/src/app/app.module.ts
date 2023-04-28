import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { HomeComponent } from './home/home.component';
import { DocentiComponent } from './docenti/docenti.component';
import { DocenteComponent } from './docenti/docente/docente.component';
import { StudentiComponent } from './studenti/studenti.component';
import { StudenteComponent } from './studenti/studente/studente.component';
import { EditStudenteComponent } from './studenti/edit-studente/edit-studente.component';

@NgModule({
  declarations: [
    AppComponent,
    ContattiComponent,
    ChiSiamoComponent,
    HomeComponent,
    DocentiComponent,
    DocenteComponent,
    StudentiComponent,
    StudenteComponent,
    EditStudenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

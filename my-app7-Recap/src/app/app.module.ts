import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestioneComponent } from './gestione/gestione.component';
import { GestioneStudentiComponent } from './gestione/gestione-studenti/gestione-studenti.component';
import { StudentiIscrittiComponent } from './gestione/gestione-studenti/studenti-iscritti/studenti-iscritti.component';
import { StudenteInfoComponent } from './gestione/gestione-studenti/studente-info/studente-info.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ActiveUsersComponent } from './login/active-users/active-users.component';
import { InactiveUsersComponent } from './login/inactive-users/inactive-users.component';


@NgModule({
  declarations: [
    AppComponent,
    GestioneComponent,
    GestioneStudentiComponent,
    StudentiIscrittiComponent,
    StudenteInfoComponent,
    LoginComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

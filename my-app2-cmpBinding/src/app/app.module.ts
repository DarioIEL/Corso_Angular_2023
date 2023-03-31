import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ComputerComponent } from './computer/computer.component';
import { UserComponent } from './user/user.component';
import { ListaGiochiComponent } from './lista-giochi/lista-giochi.component';
import { GiocoComponent } from './lista-giochi/gioco/gioco.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ServerElementComponent,
    ComputerComponent,
    UserComponent,
    ListaGiochiComponent,
    GiocoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ComputerComponent } from './computer/computer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ServerElementComponent,
    ComputerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

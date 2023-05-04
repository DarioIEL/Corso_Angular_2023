import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContattoComponent } from './contatti/contatto/contatto.component';

const routes: Routes = [
  // Ogni rotta è un oggetto JS
  {path: "", component: HomeComponent},
  {path: "chiSiamo", component: ChiSiamoComponent},
  {path: "contatti", component: ContattiComponent, children: [
    {path: ":id", component: ContattoComponent}
  ]},

  {path: 'not-found', component: PageNotFoundComponent, data: {messaggio: "Pagina non trovata"}},
  //le rotte wildcard vanno specificate sempre alla fine dell'array
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

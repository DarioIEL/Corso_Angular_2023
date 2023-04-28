import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { DocentiComponent } from './docenti/docenti.component';
import { HomeComponent } from './home/home.component';

// Ogni rotta è un oggetto JS
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: "chi-siamo", component: ChiSiamoComponent},
  {path: "docenti", component: DocentiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

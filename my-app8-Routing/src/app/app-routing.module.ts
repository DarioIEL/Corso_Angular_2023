import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { DocenteComponent } from './docenti/docente/docente.component';
import { DocentiComponent } from './docenti/docenti.component';
import { HomeComponent } from './home/home.component';
import { StudenteComponent } from './studenti/studente/studente.component';
import { StudentiComponent } from './studenti/studenti.component';

// Ogni rotta è un oggetto JS
const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: "chi-siamo", component: ChiSiamoComponent},

  {path: "docenti", component: DocentiComponent, children: [
    // i : indicano che quel parametro è dinamico
    {path: ':id/:nome/:materia', component: DocenteComponent}
  ] },

  {path: "studenti", component: StudentiComponent, children: [
    {path: ':id', component: StudenteComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

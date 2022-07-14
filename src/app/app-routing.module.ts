import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { AgricultureComponent } from './composants/agriculture/agriculture.component';
import { AjouterunereservationComponent } from './composants/ajouterunereservation/ajouterunereservation.component';
import { GestiondesreservationsComponent } from './composants/gestiondesreservations/gestiondesreservations.component';
import { MarchebioComponent } from './composants/marchebio/marchebio.component';
import { RandonneesComponent } from './composants/randonnees/randonnees.component';
import { ReservationsComponent } from './composants/reservations/reservations.component';


const routes: Routes = [
  {path: '', component: AccueilComponent, },
{path: 'reservations', component: ReservationsComponent },
{path: 'ajouterunereservation', component: AjouterunereservationComponent},
{path: 'randonnees', component: RandonneesComponent},
{path: 'marchebio', component: MarchebioComponent},
{path: 'agriculture', component: AgricultureComponent},
{path: 'gestiondesreservations', component: GestiondesreservationsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

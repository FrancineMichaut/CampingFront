import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { AjouterunereservationComponent } from './composants/ajouterunereservation/ajouterunereservation.component';
import { ReservationsComponent } from './composants/reservations/reservations.component';


const routes: Routes = [
  {path: '', component: AccueilComponent, },
{path: 'reservations', component: ReservationsComponent },
{path: 'ajouterunereservation', component: AjouterunereservationComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ReservationsComponent } from './composants/reservations/reservations.component';


const routes: Routes = [
  {path: '', component: AccueilComponent, },
{path: 'reservations', component: ReservationsComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

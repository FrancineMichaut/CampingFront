import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' ;
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarrenavComponent } from './composants/barrenav/barrenav.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ReservationsComponent } from './composants/reservations/reservations.component';
import { AjouterunereservationComponent } from './composants/ajouterunereservation/ajouterunereservation.component';
import { RandonneesComponent } from './composants/randonnees/randonnees.component';
import { MarchebioComponent } from './composants/marchebio/marchebio.component';
import { AgricultureComponent } from './composants/agriculture/agriculture.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TruncateWords } from './services/truncate-words.pipe';
import { GestiondesreservationsComponent } from './composants/gestiondesreservations/gestiondesreservations.component';

@NgModule({
  declarations: [
    AppComponent,
    BarrenavComponent,
    AccueilComponent,
    ReservationsComponent,
    AjouterunereservationComponent,
    RandonneesComponent,
    MarchebioComponent,
    AgricultureComponent,
    TruncateWords,
    GestiondesreservationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

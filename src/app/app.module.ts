import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarrenavComponent } from './composants/barrenav/barrenav.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ReservationsComponent } from './composants/reservations/reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    BarrenavComponent,
    AccueilComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

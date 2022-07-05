import { Component, OnInit } from '@angular/core';
import { CampingService } from 'src/app/services/camping.service';

@Component({
  selector: 'app-ajouterunereservation',
  templateUrl: './ajouterunereservation.component.html',
  styleUrls: ['./ajouterunereservation.component.css']
})
export class AjouterunereservationComponent implements OnInit {

  constructor(private campingService : CampingService) { }

  ngOnInit(): void {
  }

// ****************************méthode reliée au bouton ajouter dans ajouter une réservationdans la partie administrateur************
saveReservation(reservation: any) {
  let data = reservation.value;
  this.campingService.saveReservation(data).subscribe((data) => {
    console.log('les données sont enregistrées');
  });
}








}

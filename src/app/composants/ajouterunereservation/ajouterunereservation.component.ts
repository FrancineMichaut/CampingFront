import { Component, OnInit } from '@angular/core';
import { CampingService } from 'src/app/services/camping.service';

@Component({
  selector: 'app-ajouterunereservation',
  templateUrl: './ajouterunereservation.component.html',
  styleUrls: ['./ajouterunereservation.component.css']
})
export class AjouterunereservationComponent implements OnInit {

  reservations : any = []

  rupdate = {
    id : "",
    titre:"",
    type:"",
    categories :"",
    description :"",
    image :"",
    price:""
  }



  constructor(private campingService : CampingService) { }

  ngOnInit(): void {
    this.bookings()

  }




  bookings() {
    this.campingService.getBookings().subscribe( data=>{
      this.reservations = data;
      console.log(this.reservations);
      
    })}

















// ****************************méthode reliée au bouton ajouter dans ajouter une réservationdans la partie administrateur************
saveReservation(reservation: any) {
  let data = reservation.value;
  this.campingService.saveReservation(data).subscribe((data) => {
    console.log('les données sont enregistrées');
  });
}


deleteReservation (id: any) {
  console.log();
  this.campingService.delete(id).subscribe(() => {
    console.log("reservations with id : "+id +"deleted");
    this.bookings()     // pour rendre la suppression instantenée 
  })}

  edit (r:any) {
    this.rupdate.id=r._id
    this.rupdate.titre=r.titre
    this.rupdate.type = r.type
    this.rupdate.categories= r.categories
    this.rupdate.description = r.description
    this.rupdate.image = r.image
    this.rupdate.price = r.price
    console.log(this.rupdate);
  }


  miseJourR() {
    console.log(this.rupdate);
    this.campingService.edit(this.rupdate).subscribe(() => {
      this.bookings();
      console.log('Vos modifications ont été effectuées');
      
    })
  }












}

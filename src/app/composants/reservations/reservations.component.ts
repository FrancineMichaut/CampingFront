import { Component, OnInit } from '@angular/core';
import { CampingService } from 'src/app/services/camping.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

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




  constructor (private campingservice : CampingService) { }

  ngOnInit(): void {
    this.bookings()
  }

  bookings() {
      this.campingservice.getBookings().subscribe( data=>{
        this.reservations = data;
        console.log(this.reservations);
        
      })}


  deleteReservation (id: any) {
  console.log();
  this.campingservice.delete(id).subscribe(() => {
    console.log("reservations with id : "+id +"deleted");
    this.bookings()     // pour rendre la suppression instantenée 
  })}

  edit (r:any) {
    this.rupdate.id=r._id
    this.rupdate.titre=r.titre
    this.rupdate.type = r.type
    this.rupdate.description = r.description
    this.rupdate.image = r.image
    this.rupdate.price = r.price
    console.log(this.rupdate);
  }


  miseJourR() {
    console.log(this.rupdate);
    this.campingservice.edit(this.rupdate).subscribe(() => {
      this.bookings();
      console.log('Vos modifications ont été effectuées');
      
    })
  }






}



























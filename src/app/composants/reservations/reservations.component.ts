import { Component, OnInit } from '@angular/core';
import { CampingService } from 'src/app/services/camping.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  // reservations : any = []

  // rupdate = {
  //   id : "",
  //   titre:"",
  //   type:"",
  //   categories :"",
  //   description :"",
  //   image :"",
  //   price:""
  // }




  constructor (private campingservice : CampingService) { }

  ngOnInit(): void {
    // this.booking();
  }

  // booking() {
  //     this.campingservice.getbookings().subscribe(data =>{
  //       this.reservations= data;
  //       console.log(this.booking);
  //     })



  // deleteReservation(id: any) {
  //   console.log(id);
  //   this.campingservice.delete(id).subscribe(() => {
  //     console.log("livres with id : "+id + "deleted");
  //     this.booking()
  //   })
  // }


  // edit(l:any) {
  //   this.rupdate.id=r_id
  //   this.rupdate.titre=r.titre
  //   this.rupdate.type=r.type
  //   this.rupdate.categories=r.categories
  //   this.rupdate.description=r.description
  //   this.rupdate.image=r.image
  //   this.rupdate.price=r.price
  // }





















}

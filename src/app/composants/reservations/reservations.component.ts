import { Component, OnInit } from '@angular/core';
import { CampingService } from 'src/app/services/camping.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations : any = []
    // Pagination
    p: number = 1

  // Methode de recherche par catégories 
    categories : any = ["Economique","Luxe", "Chic","Deluxe"]

  rupdate = {
    id : "",
    titre:"",
    type:"",
    categories :"",
    description :"",
    image :"",
    price:""
  }


  // message d'erreur si aucune reservation trouvée
  errorState: boolean = false;
  errorMessage: any;

  constructor (private campingservice : CampingService) { }

  ngOnInit(): void {
    this.bookings()
  }

  bookings() {
      this.campingservice.getBookings().subscribe( data=>{
        this.reservations = data;
        console.log(this.reservations);
        
      })}


  // deleteReservation (id: any) {
  // console.log();
  // this.campingservice.delete(id).subscribe(() => {
  //   console.log("reservations with id : "+id +"deleted");
  //   this.bookings()     // pour rendre la suppression instantenée 
  // })}

  // edit (r:any) {
  //   this.rupdate.id=r._id
  //   this.rupdate.titre=r.titre
  //   this.rupdate.type = r.type
  //   this.rupdate.categories= r.categories
  //   this.rupdate.description = r.description
  //   this.rupdate.image = r.image
  //   this.rupdate.price = r.price
  //   console.log(this.rupdate);
  // }


  miseJourR() {
    console.log(this.rupdate);
    this.campingservice.edit(this.rupdate).subscribe(() => {
      this.bookings();
      console.log('Vos modifications ont été effectuées');
      
    })
  }

  findByCategories(c:any) {
    this.campingservice.findbycat(c).subscribe(data=>{
      this.reservations = data
    })
  }

  findbyprice(f:any){
    this.campingservice.keyprice(f.min,f.max).subscribe(data=>{
      this.reservations = data
      
    })
  }


  findbykeyword(f:any){
    this.campingservice.getkeyword(f.keyword).subscribe(data=>{
      if (data == "") {        
        this.errorState = true;
        this.errorMessage = "Aucun livre trouvé"
      }

      this.reservations = data
      console.log(f.keyword);
      
    })
  }

changePage($event : any) {
    this.p = $event
    document.documentElement.scrollTop = 0
  }











}



























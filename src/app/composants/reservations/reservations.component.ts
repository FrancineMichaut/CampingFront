import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampingService } from 'src/app/services/camping.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  paiment: boolean = false;
  reservations: any = [];
  // Pagination
  p: number = 1;

  success: boolean = false;

  bookcamp: any = {
    // correspond au schéma du backend
    titre: '',
    type: '',
    image: '',
    price: '',
    // algo a faire calcul
    totalPrice: '',
    dateArrivee: '',
    nomClient: '',
    nombreDeNuits: '',
  };

  reservation: any = {
    id: '',
    titre: '',
    type: '',
    categories: '',
    description: '',
    image: '',
    price: '',
    // algo a faire calcul
    totalPrice: '',
  };

  // Methode de recherche par catégories
  categories: any = ['Eco', 'Luxe', 'Chic', 'Deluxe'];

  rupdate = {
    id: '',
    titre: '',
    type: '',
    categories: '',
    description: '',
    image: '',
    price: '',
  };

  // message d'erreur si aucune reservation trouvée
  errorState: boolean = false;
  errorMessage: any;

  constructor(private campingservice: CampingService, private router: Router) {}

  ngOnInit(): void {
    this.bookings();
  }

  bookings() {
    this.campingservice.getBookings().subscribe((data) => {
      this.reservations = data;
      console.log(this.reservations);
    });
  }

  miseJourR() {
    console.log(this.rupdate);
    this.campingservice.edit(this.rupdate).subscribe(() => {
      this.bookings();
      console.log('Vos modifications ont été effectuées');
    });
  }

  findByCategories(c: any) {
    this.campingservice.findbycat(c).subscribe((data) => {
      this.reservations = data;
    });
  }

  findbyprice(f: any) {
    this.campingservice.keyprice(f.min, f.max).subscribe((data) => {
      this.reservations = data;
    });
  }

  findbykeyword(f: any) {
    this.campingservice.getkeyword(f.keyword).subscribe((data) => {
      if (data == '') {
        this.errorState = true;
        this.errorMessage = 'Aucun livre trouvé';
      }

      this.reservations = data;
      console.log(f.keyword);
    });
  }

  changePage($event: any) {
    this.p = $event;
    document.documentElement.scrollTop = 0;
  }

  recupInfoReservation(r: any) {
    this.reservation = r;
    console.log(this.reservation.titre);
  }

  addBook(f: any) {
    this.bookcamp.titre = this.reservation.titre;
    this.bookcamp.type = this.reservation.type;
    // this.bookcamp.description =  this.reservation.description
    this.bookcamp.price = this.reservation.price;
    this.bookcamp.dateArrivee = f.date;
    this.bookcamp.nomClient = f.nom;
    this.bookcamp.nombreDeNuits = f.nombreDeNuit;
    this.bookcamp.totalPrice = f.nombreDeNuit * this.reservation.price;

    console.log('ma reservation : ', this.bookcamp);

    this.paiment = true;
  }

  // envoiInfoReservation(r){

  // }

  finalCommande() {
    console.log('.... atat ', this.bookcamp);

    this.campingservice.saveBook(this.bookcamp).subscribe((data) => {
      console.log('success ... !');
      // alert( ``)
      this.success = true;
    });
    // this.router.navigate(['/gestiondesreservations']);
  }
}

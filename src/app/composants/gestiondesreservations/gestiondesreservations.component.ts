import { Component, OnInit } from '@angular/core';
import { CampingService } from 'src/app/services/camping.service';

@Component({
  selector: 'app-gestiondesreservations',
  templateUrl: './gestiondesreservations.component.html',
  styleUrls: ['./gestiondesreservations.component.css']
})
export class GestiondesreservationsComponent implements OnInit {
  books:any;
  constructor(private sc : CampingService) { }

  ngOnInit(): void {
    this.getBooks()
  }


  getBooks(){
    this.sc.getBook().subscribe(data=>{
      this.books = data
      this.getBooks()
    })
  }

}

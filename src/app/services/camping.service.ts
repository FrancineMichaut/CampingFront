import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CampingService {

  constructor(private http : HttpClient) { }

  delete(id: any) {
    return this.http.delete(`https://thawing-atoll-53826.herokuapp.com/campings/${id}`)
  }
  
  getBookings(){
    return this.http.get('https://thawing-atoll-53826.herokuapp.com/campings')
  }
  
  
  edit(r:any){
    return this.http.put("https://thawing-atoll-53826.herokuapp.com/campings/"+r.id , r)
  }

  saveReservation(reservation:any){

    return this.http.post("https://thawing-atoll-53826.herokuapp.com/campings/", reservation)   // méthode qui enregistre les modifications apportées dans la partie admin, ajouter une réservation 
  }



}

import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CampingService {

  constructor(private http : HttpClient) { }
}

// getbookings () {
//   return this.http.get('https://thawing-atoll-53826.herokuapp.com/campings')
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barrenav',
  templateUrl: './barrenav.component.html',
  styleUrls: ['./barrenav.component.css']
})
export class BarrenavComponent implements OnInit {

  constructor() { }

  recupform = {
    Username: "",
    Motdepasse: "",
  }

  ngOnInit(): void {
  }

  boutonLogin: Boolean = false
  alertId: Boolean = false


  // *************************************méthode qui valide ou non le mot de passe de l'administrateur************************
  validate() {

    console.log(this.recupform);

    if (this.recupform.Username === 'Alpha' && this.recupform.Motdepasse === '1234' || this.recupform.Username === 'Francine' && this.recupform.Motdepasse === '1234') {
      this.boutonLogin = !this.boutonLogin

    }

    else {

      this.alertId = !this.alertId
      setTimeout(() => { this.alertId = !this.alertId }, 5000); 
    }

  }









}

import { Component, OnInit } from '@angular/core';
import { Utente } from '../../../models/utente';
import { UtentiService } from '../../../services/utenti.service'


/**
 *    Componente rappresentante la pagina di registrazione utente
 */


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  utente: Utente;

  constructor(private utentiservice: UtentiService) {
    this.utente = new Utente();
  }

  //registra l'utente sul server
  registraUtente() {
      this.utentiservice.addUtente(this.utente).subscribe((data) => {
      console.log(data);
    })

  }

  ngOnInit() {
  }

}

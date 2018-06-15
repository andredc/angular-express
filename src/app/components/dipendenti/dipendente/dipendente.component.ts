import { Component, OnInit } from '@angular/core';
import { RuoliService } from '../../../services/ruoli.service'
import { Ruolo } from '../../../models/ruolo'
import { ActivatedRoute } from '@angular/router';
import { UtentiService } from '../../../services/utenti.service'
import { Utente } from '../../../models/utente'
import { Subject } from 'rxjs';
 

/**
 *    Componente rappresentante la il pannello dipendente tramite tab group
 *    
 */



@Component({
  selector: 'app-dipendente',
  templateUrl: './dipendente.component.html',
  styleUrls: ['./dipendente.component.css']
})
export class DipendenteComponent implements OnInit {
  //dipendente: Utente
  constructor(private utentiservice: UtentiService, private route: ActivatedRoute) {
    //this.dipendente = new Utente()
    //this.getDipendente();
  }

  ngOnInit() {
  }

}

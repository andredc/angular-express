import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtentiService } from '../../../services/utenti.service'
import { Ruolo } from '../../../models/ruolo'
import { TeamsService } from '../../../services/teams.service';
import { RuoliService } from '../../../services/ruoli.service'
 
/**
 * Componente che visualizza tutti i ruoli di un dipendente
 */

@Component({
  selector: 'app-ruoli-dipendente',
  templateUrl: './ruoli-dipendente.component.html',
  styleUrls: ['./ruoli-dipendente.component.css']
})
export class RuoliDipendenteComponent implements OnInit {
  ruoli: Ruolo[]

  constructor(private ruoliservice:RuoliService, private route: ActivatedRoute) { 
    this.getRuoli();
  }

  ngOnInit() {
  }

  //preleva i ruoli ricoperti da un dipendente dal database
  getRuoli(){
    //console.log("call ruoli")
    const id = +this.route.snapshot.paramMap.get('id');
    this.ruoliservice.getRuoli(id).subscribe((data) => {
      console.log(data)
      this.ruoli = data['ruoli']
    })
    }
}

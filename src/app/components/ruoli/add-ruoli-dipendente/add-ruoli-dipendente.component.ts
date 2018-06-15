import { Component, OnInit } from '@angular/core';
import { UtentiService } from '../../../services/utenti.service'
import { Utente } from '../../../models/utente'
import { Team } from '../../../models/team'
import { Ruolo } from '../../../models/ruolo'
import { TeamsService } from '../../../services/teams.service';
import { RuoliService } from '../../../services/ruoli.service'
import { SnackService } from '../../../services/snack.service'


/**
 * 
 * Componene che permette di aggiungere un ruolo ad un dipendente 
 * 
 */


@Component({
  selector: 'app-add-ruoli-dipendente',
  templateUrl: './add-ruoli-dipendente.component.html',
  styleUrls: ['./add-ruoli-dipendente.component.css']
})
export class AddRuoliDipendenteComponent implements OnInit {
  dipendenti: Utente[]
  teams: Team[]
  ruolo: Ruolo
  selectedIdTeam:number
  selectedIdDipendente:number

  constructor(private utentiservice: UtentiService, 
              private teamsservice: TeamsService,
              private ruoliservice: RuoliService,
              private snackservice: SnackService ) {
    this.ruolo = new Ruolo
    this.getDipendenti();
    this.getTeams()
  }

  ngOnInit() {
  }

  //preleva i dati dei dipendenti dal database
  getDipendenti() {
    this.utentiservice.getUtenti().subscribe((data) => {
      this.dipendenti = data['dipendenti'];
      console.log(data['success'])
      console.log(data)
      console.log(data['dipendenti'])
    })
  }

  //preleva i dati dei teams dal database
  getTeams() {
    this.teamsservice.getTeams().subscribe((data) => {
      this.teams = data['teams'];      
      console.log(data['success'])
      console.log(data)
      console.log(data['teams'])
    })
  }

  //aggiunge ad un utente il ruolo che ricopre all'interno di un team e la salva nel database
  addRuolo(){
    this.ruolo.ID_team=this.selectedIdTeam
    this.ruolo.ID_dipendente=this.selectedIdTeam

    this.ruoliservice.addRuolo(this.ruolo).subscribe((data) => {
      this.teams = data['teams'];
      var message:string;
      this.snackservice.snackAndRouting('Aggiunto Ruolo','Errore',data['status'],'dipendenti')
      console.log(data['status'])
      console.log(data)
      console.log(data['teams'])
    })

  }
}


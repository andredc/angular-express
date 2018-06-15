import { Component, OnInit ,Input } from '@angular/core';
import { UtentiService } from '../../../services/utenti.service'
import { Utente } from '../../../models/utente'
import { ActivatedRoute } from '@angular/router';
import { Team } from '../../../models/team'
import {TeamsService} from '../../../services/teams.service'
import {SnackService} from '../../../services/snack.service'



/**
 *    componente che visualizza un team ed i suoi componenti
 * 
 */

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team:Team;
  dipendenti: Utente[]

  constructor(private utentiservice: UtentiService,private teamsservice: TeamsService,
              private route: ActivatedRoute,private snackservice: SnackService ) {
    this.team = new Team();
   }

  ngOnInit() {
    this.getTeam();
    this.getDipendentiTeam();
  }

  //preleva le informazioni dei dipendenti di un team
  getDipendentiTeam(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamsservice.getDipendentiTeam(id).subscribe((data) => {
      this.dipendenti = data['dipendenti'];
      console.log(data['success'])
      console.log(data)
      console.log(data['dipendenti'])
    })
  }

  //preleva le informazioni di un team
  getTeam(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamsservice.getTeam(id).subscribe((data) => {
      this.team = data['team'][0];
      console.log(this.team)
      console.log(data['success'])
      console.log(data)
      console.log(data['team'])
    })
  }

  //aggiorna le informazioni di un team
  updateTeam(){
    this.teamsservice.updateTeam(this.team).subscribe((data) => {
      this.snackservice.snackAndRouting('Update Data','Errore',data['status'],'dipendenti')
      console.log(data);
      
    })
  }

  }

  

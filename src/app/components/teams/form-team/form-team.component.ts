import { Component, OnInit } from '@angular/core';
import { Team } from '../../../models/team'
import {TeamsService} from '../../../services/teams.service'
import {SnackService} from '../../../services/snack.service'



/**
 *    componente che permette l'aggiunta di un team
 * 
 */


@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.css']
})
export class FormTeamComponent implements OnInit {
  team : Team;

  constructor(private teamsservice: TeamsService, private snackservice:SnackService) {
    this.team=new Team()
  }
  
  ngOnInit() {
  }

  //aggiunge un team a quelli presenti nel db
  addTeam(){
    console.log(this.team)
    this.teamsservice.addTeam(this.team).subscribe((data) =>{
      this.snackservice.snackAndRouting('Aggiunto Team','Errore',data['status'],'dipendenti')
      console.log(data)
    })
  }
}

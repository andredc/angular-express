import { Component, OnInit,ViewChild } from '@angular/core'; 
import { Team } from '../../../models/team'
import {TeamsService} from '../../../services/teams.service'
import { MatPaginator, MatTableDataSource,  MatSort } from '@angular/material';


/**
 *    componente che visualizza tutti i teams 
 */


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[]
  displayedColumns: String[] = ['ID', 'nome','descrizione' ,'Details'];
  dataSource: MatTableDataSource<Team>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private teamsservice: TeamsService) {
    this.getTeams()
  }

  applyFilter(filterValue: string) {
    //console.log(filterValue)
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
  }

  //preleva le informazioni di tutti i teams
  getTeams() {
    //console.log("Teamssss")
    this.teamsservice.getTeams().subscribe((data) => {
      this.teams = data['teams'];
      console.log(data['success'])
      console.log(data)
      console.log(data['teams'])
      
      this.dataSource = new MatTableDataSource<Team>(this.teams)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
    })

  }
}

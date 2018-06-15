import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/team';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, of} from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { Utente } from '../models/utente';
import { AuthService } from './auth.service';
import { environment } from '../configuration'

 

/* 

    Servizio per l'invio delle richieste HTTP relative ai Teams

*/

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient,private authservice: AuthService) { }

  addTeam(team: Team): Observable<Team>{
      return this.http.post<Team>( environment.appUrl +"/api/teams", team, this.authservice.httpOptions())
   }

  getTeams(): Observable<Team[]> {
    console.log("Get Teams")
    return this.http.get<Team[]>( environment.appUrl +"/api/teams", this.authservice.httpOptions())
  }
  
  getDipendentiTeam(id:number): Observable<Utente[]>{
    console.log("Get Team Components")
    return this.http.get<Utente[]>( environment.appUrl +"/api/teams/"+id+"/dipendenti", this.authservice.httpOptions())
  }

  getTeam(id:number): Observable<Utente[]>{
    console.log("Get Team Info")
    return this.http.get<Utente[]>( environment.appUrl +"/api/teams/"+id, this.authservice.httpOptions())
  }

  updateTeam(team: Team): Observable<Team>{
    return this.http.put<Team>( environment.appUrl +"/api/teams/"+ team.ID, team, this.authservice.httpOptions())
 }

}

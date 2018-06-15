import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, of} from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { Utente } from '../models/utente';
import { Skill } from '../models/skill';
import { AuthService } from './auth.service';
import { environment } from '../configuration'

/* 

    Servizio per l'invio delle richieste HTTP relative alle skills

*/

 



@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient,private authservice: AuthService) { }

  getSkills(): Observable<Skill[]> {
    console.log("Get skills")
    return this.http.get<Skill[]>( environment.appUrl +"/api/skills", this.authservice.httpOptions())
  }
  getSkillsDipendente(id_dipendente:number) : Observable<Skill[]> {
    console.log("Get skills dipendente")
    return this.http.get<Skill[]>( environment.appUrl +"/api/dipendenti/" + id_dipendente + "/skills", this.authservice.httpOptions())
  }
  getSkillsDipendenti() : Observable<Skill[]> {
    console.log("Get skills dipendente")
    return this.http.get<Skill[]>( environment.appUrl +"/api/skillsdipendenti", this.authservice.httpOptions())
  }
  addSkillsDipendente(skill: Skill,id_dipendente:number): Observable<Skill[]> {
    console.log("add Skill Dipendente: " + id_dipendente)
    return this.http.post<Skill[]>( environment.appUrl +"/api/dipendenti/" + id_dipendente + "/skills", skill, this.authservice.httpOptions())
  }
  addSkill(skillname: String): Observable<Skill[]> {
    console.log("add Skill "+ skillname )
    return this.http.post<Skill[]>( environment.appUrl +"/api/skills", {'name':skillname}, this.authservice.httpOptions())
  }
  deleteSkill(id_tag:number):Observable<Skill[]>{
    console.log("Delete Skill")
    return this.http.delete<Skill[]>( environment.appUrl +"/api/skills/"+id_tag,this.authservice.httpOptions())

  }
}

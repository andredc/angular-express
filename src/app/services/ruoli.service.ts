import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, of} from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { Ruolo } from '../models/ruolo'
import { AuthService } from './auth.service';
import { environment } from '../configuration'

 
@Injectable({
  providedIn: 'root'
})
export class RuoliService {
  
  constructor(private http: HttpClient, private authservice: AuthService) { }
  addRuolo(ruolo:Ruolo): Observable<Ruolo>{
    return this.http.post<Ruolo>( environment.appUrl +"/api/dipendenti/"+ ruolo.ID_dipendente +"/ruoli", ruolo, this.authservice.httpOptions())
 }

   getRuoli(id_dipendente:number): Observable<Ruolo[]> {
  console.log("Get Ruoli")
  return this.http.get<Ruolo[]>( environment.appUrl +"/api/dipendenti/"+id_dipendente+"/ruoli", this.authservice.httpOptions())
}

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from '../models/utente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { environment } from '../configuration'


/* 

   Servizio per l'invio delle richieste HTTP relative agli utenti

*/

@Injectable()
export class UtentiService {
  constructor(private http: HttpClient, private authservice: AuthService) { }

  addUtente(utente: Utente): Observable<Utente> {
    return this.http.post<Utente>( environment.appUrl +"/api/register", utente, this.authservice.httpOptions())
  }
  updateUtente(utente: Utente): Observable<Utente> {
    return this.http.put<Utente>( environment.appUrl +"/api/dipendenti/" + utente.ID, utente, this.authservice.httpOptions())
  }

  getUtenti(): Observable<Utente[]> {
    console.log("Get Utenti")
    return this.http.get<Utente[]>( environment.appUrl +"/api/dipendenti", this.authservice.httpOptions())
  }
  getUtente(id: number): Observable<Utente> {
    console.log("Get Utente " + id)
    return this.http.get<Utente>( environment.appUrl +"/api/dipendenti/" + id, this.authservice.httpOptions())
  }



}

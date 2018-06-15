import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from '../models/utente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { stringify } from '@angular/core/src/util';
import { MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR } from '@angular/material';
import { Route, Router } from '@angular/router';
import { environment } from '../configuration'
/* 

    Servizio utilizzato per la gestione dell'autenticazione

*/


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Utente;
  constructor(private http: HttpClient, private router: Router) {
    this.user = new Utente()
  }

  //verifica username e password inseriti dall'utente durante il login
  authenticate(username: string, password: string): Observable<JSON> {
    return this.http.post<JSON>( environment.appUrl +"/api/authenticate",
      {
        'username': username,
        'password': password
      }, this.httpOptions())
  }

  //salva l'utente e un token
  setTokenAndUtente(utente: Utente, token: string): void {
    localStorage.setItem('user', JSON.stringify({ user: utente, logged: true }))
    localStorage.setItem('token', token)
  }

  //preleva le informazioni dell'utente salvate precedentemente
  getUser() {
    return JSON.parse(localStorage.getItem('user'))
  }

  //verifica se si è loggati
  isLogged(): boolean {
    if (this.getUser() != null) {
      if (this.getUser().logged == true)
        return false
    } return true
  }

  //verifica se l'utente loggato è un amministratore
  isAdmin(): boolean {
    //console.log(this.getUser())
    if (this.getUser() != null) {
      if (this.getUser().user.admin == 1)
        return false
    } return true
  }

  //effettua il logout rimuovendo dal localstorage username e token
  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  //Ritorna le opzioni per effettuare correttamente la richiesta http
  //nello specifo aggiunge, se presente, il token all'header
  httpOptions() {
    //console.log("token: " + localStorage.getItem('token'))
    var headers = new HttpHeaders()
    headers = headers.append('Content-Type', 'application/json'); 7

    if (localStorage.getItem('token') != null) {
      headers = headers.append('Authorization', localStorage.getItem('token')) // localStorage.getItem('token'))// localStorage.getItem('token') || ''
      console.log('Add token')
    };
    console.log(headers.get('Authorization'))
    return { headers }
  }

}
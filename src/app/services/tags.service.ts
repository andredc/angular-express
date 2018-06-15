import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tag1 } from '../models/tag';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../configuration'


/* 

    Servizio per l'invio delle richieste HTTP relative ai tags

*/

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient, private authservice: AuthService) { }
  addTagDipendente(tag: Tag1, id_dipendente: number): Observable<Tag1> {
    return this.http.post<Tag1>( environment.appUrl +"/api/dipendenti/" + id_dipendente + "/tags", tag, this.authservice.httpOptions())
  }

  getTagsDipendente(id_dipendente: number): Observable<Tag1[]> {
    console.log("Get Tags Dipendente")
    return this.http.get<Tag1[]>( environment.appUrl +"/api/dipendenti/" + id_dipendente + "/tags", this.authservice.httpOptions())
  }
  getTags(): Observable<Tag1[]> {
    console.log("Get Tags")
    return this.http.get<Tag1[]>( environment.appUrl +"/api/tags", this.authservice.httpOptions())

  }
  deleteTagDipendente(id_dipendente: number, id_tag: number): Observable<Tag1[]> {
    console.log("Delete Tags")
    return this.http.delete<Tag1[]>( environment.appUrl +"/api/dipendenti/" + id_dipendente + "/tags/" + id_tag, this.authservice.httpOptions())

  }

  getTagsDipendenti(): Observable<Tag1[]> {
    console.log("Get Tags Dipendenti")
    return this.http.get<Tag1[]>( environment.appUrl +"/api/tags/dipendenti", this.authservice.httpOptions())
  }

}

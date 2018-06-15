import { Injectable } from '@angular/core';
import {AuthService} from './auth.service'
import { Router, CanActivate } from '@angular/router'


/* 

    Servizio utilizzato per il reindirizzamento degli utenti alla pagina di login
    nel caso in cui non si siano ancora loggati

*/


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private authservice:AuthService, private router:Router) { }
  canActivate(){
    //console.log(this.router.url + ' <-')
    //console.log(this.authservice.isAdmin())
    if(this.authservice.isLogged()){
      this.router.navigate(['/login'])
    /*}else if(this.router.url =='/admin' && !this.authservice.isAdmin()){
      this.router.navigate(['/dipendenti'])
    }*/}
    return true
  } 
  checkAdmin(){
    if(this.authservice.isAdmin()){
      this.router.navigate(['/dipendenti'])
    }
  }
}

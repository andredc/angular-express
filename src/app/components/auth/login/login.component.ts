import { Component, OnInit } from '@angular/core';
import { Utente } from '../../../models/utente';
import { UtentiService } from '../../../services/utenti.service'
import { AuthService } from '../../../services/auth.service';
import { SnackService } from '../../../services/snack.service';


/**
 *    Componente rappresentante la pagina di login utente
 */



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utente: Utente;

  constructor(private authservice: AuthService,private snackservice: SnackService) {
    this.utente = new Utente();
  }

  //effettua il login e salva le informazioni di utente e token sul LocalStorage
  loginUtente() {
    this.authservice.authenticate(this.utente.username, this.utente.password)
      .subscribe((data) => {
        console.log(data)
        var status:number
        var route:string
        if (data['success']){
              status=200
             this.authservice.setTokenAndUtente(data['utente'],data['token']);
             route='/dipendenti/1'
        }else{
              status= 401
              route='/login'
          }
          this.snackservice.snackAndRouting('Login effettuato', 'Errore, Utente e/o Password errati', status ,route)
        //console.log(this.authservice.httpOptions())
        //console.log(this.authservice.getUser())
      })

  }

  ngOnInit() {
  }

}

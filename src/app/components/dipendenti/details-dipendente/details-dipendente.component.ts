import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnackService } from '../../../services/snack.service'
import { UtentiService } from '../../../services/utenti.service'
import { Utente } from '../../../models/utente'
import { Subject } from 'rxjs';


/**
 *    Componente che visualizza i dettagli dell'utente
 */


@Component({
  selector: 'app-details-dipendente',
  templateUrl: './details-dipendente.component.html',
  styleUrls: ['./details-dipendente.component.css']
})

export class DetailsDipendenteComponent implements OnInit {
  dipendente: Utente;
  myPage: boolean;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private utentiservice: UtentiService, private route: ActivatedRoute, private snackservice: SnackService) {
    this.dipendente = new Utente()
    this.getDipendente();
    this.myPage = false;
    this.checkIdentity()
  }

  ngOnInit() {
  }

  //preleva le infomazioni del dipendente dal database
  getDipendente() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.utentiservice.getUtente(id).subscribe((data) => {
      console.log(data)
      this.dipendente = data['dipendente'][0];
    })
  }

  //aggiorna le informazione del dipendente sul db
  updateDipendente() {
    this.utentiservice.updateUtente(this.dipendente).subscribe((data) => {
      console.log(data);
      this.snackservice.snackAndRouting('Update Data', 'Errore', data['status'], 'dipendenti')
    })
  }

  //verifica l'identità dell'utente loggato
  checkIdentity() {
    const id = +this.route.snapshot.paramMap.get('id');
    // console.log(JSON.parse(localStorage.getItem('user')).user.ID + "---------" + id)
    if (JSON.parse(localStorage.getItem('user')).user.ID == id) {
      this.myPage = true
    } else { this.myPage = false }
    // console.log(this.myPage)
  }
}

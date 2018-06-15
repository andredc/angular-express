import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

/* 

    Servizio di notifica a schermo

*/


@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(public snackBar: MatSnackBar,
    private router: Router) { }

  snackAndRouting(message: string,messageError:string, data: any, route:string) {
    this.snack(message,messageError,data)
    this.router.navigate([route])
  }
  snack(message: string,messageError:string, status: number) {
    var snack;
    if (status == 200) {
      snack = message
    } else {
      snack = messageError
    }
    this.snackBar.open(snack, "Close", {
      duration: 2000,
    });
  }

}


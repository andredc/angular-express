import {
  Component, OnInit, 
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatToolbar } from '@angular/material'
import { AuthService} from './services/auth.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public now: string;

 
  constructor(private authservice: AuthService) {
    this.now="ciao"
    console.log(this.authservice.isLogged())
    }

  ngOnInit(): void {
    console.log(`ngOnInit AppComponent`);
  }

  isLogged():boolean{
    return this.authservice.isLogged()
  }
   
}
 
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  isLogged(): boolean {
    return this.authservice.isLogged()
  }

  isAdmin(): boolean {
    return this.authservice.isAdmin()
  }

  logout() {
    this.authservice.logout()
  }

}

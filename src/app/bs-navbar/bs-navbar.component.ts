import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {
  appUser: AppUser;

  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);

    //Use this line when e2e testing else use above line
    //this.appUser = {name: "admin", email: "admin@admin.com", isAdmin: true};
  }

  logout() {
    this.auth.logout();
  }

}

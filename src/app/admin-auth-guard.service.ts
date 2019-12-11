import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/map'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  //(Observable) - Fetcher FireBase user som så switcher til user fra userService
  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin);
     
  }
}

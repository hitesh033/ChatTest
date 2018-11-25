import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedOut: boolean = false;
  constructor(private router: Router) { }

  login() {
    localStorage.setItem('token', btoa('user_token'));
    this.router.navigate(['/chat']);
  }

  logout() {
    this.loggedOut = true;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

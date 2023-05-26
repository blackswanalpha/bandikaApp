import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  constructor(public router: Router) {
  }

  canActivate(): boolean {
    if (this.isAuthenticated()) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }

  isAuthenticated() {
    return (sessionStorage.getItem('token'));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _refreshNeeded$ = new Subject<void>();
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }
  // Provide username and password for authentication, and once authentication is successful, 
  //store JWT token in session
  authenticate(username: string, password: any) {
    return this.httpClient
      .post<any>(`${this.apiServerUrl}/authenticate/login`, { username, password })
      .pipe(
        map(userData => {
          sessionStorage.setItem("username", username);
          console.log(username)
          let tokenStr = `${userData.token}`;
          console.log(`This is the message`)
          console.log(userData)
          sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    // console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");

    console.log('logout');

  }

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }
}

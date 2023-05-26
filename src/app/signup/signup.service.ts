import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  UserUrl = environment.apiBaseUrl + '/user/add';

  constructor(private http: HttpClient, private toastr: ToastrService
   ) { }
  private handleError(error: HttpErrorResponse) {
    if (error && error['error'] && error['error']['message'] === 'Unauthorized') {
      this.toastr.error('Invalid username or password.');
      return throwError(error);
    }
    return throwError(
    this.toastr.error(error.error));

  }

  onRegister(userDetails: any) {
    return this.http.post(this.UserUrl, userDetails);
  }

  public addLogin(login: Login): Observable<Login> {
    return this.http.post<Login>(this.UserUrl, login);
  }
}

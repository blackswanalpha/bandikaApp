import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
// import { ServiceService } from '../service/service.service';
import { LoginService } from './login.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin = false

  @Input()
  error!: string | null;
  showSpinner = false;

  titles = ['title1', 'title2', 'title3'];
  titleSelected: string = '';
  myScriptElement!: HTMLScriptElement;


  private responseReceived!: boolean;
  public loginForm!: FormGroup;
  constructor(private router: Router, private authentocationService: LoginService,
    private loginservice: LoginService, private _service: NotificationsService) {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "assets/js/main.js";
    document.body.appendChild(this.myScriptElement);
     }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      contactNo: new FormControl(null, Validators.required),
      pin: new FormControl(null, Validators.required)
    })
console.log(this.loginForm.value.contactNo)
    this.authentocationService.logOut();
  }


  // login() {
  //   this.responseReceived = false;
  //   const loginDetails = {
  //     username: this.loginForm.value.contactNo,
  //     password: this.loginForm.value.pin
  //   };
  //   console.log(loginDetails);
  //   this.service.loginCall(loginDetails).subscribe(
  //     response => {
  //       this.responseReceived = true;
  //       console.log('response-body: ', response);
  //       sessionStorage.setItem('auth-token', response['token']);
  //       sessionStorage.setItem('userName', response['user']['name']);
  //       sessionStorage.setItem('contactNo', response['user']['contactno']);
  //       this.router.navigate(['/home']);
  //       this.toastr.success('Login Successful');
  //     },
  //     (error: HttpErrorResponse) => {
  //       this.responseReceived = true
  //     }
  //   );
  // }

  checkLogin() {
    this.responseReceived = false;
    (this.loginservice.authenticate(this.loginForm.value.contactNo, this.loginForm.value.pin).subscribe(
      data => {
        this.router.navigate(['/'])
        this.invalidLogin = false
        window.location.reload()
      },
      error => {
        this.invalidLogin = true
        this.error = error.message;
        this.responseReceived = true
        this.titleSelected = this.titles[1];
        console.log('this is client side error');
        console.log('this is client side error');
        this._service.error("error", "Invalid Contact or Password", {
          position: ['bottom', 'right'],
          timeOut: 5000,
          animate: 'fade',
          pauseOnHover: true,
          clickToClose: false,
          clickIconToClose: true,
          showProgressBar: true
        })
        console.log(this.error);


      }
    )

    );

    this.titleSelected = ''

  }
}

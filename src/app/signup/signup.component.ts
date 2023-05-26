import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationsService } from 'angular2-notifications';
import { LoginService } from '../login/login.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public registerForm!: FormGroup;
  emailPattern!: String;
  contactNoPattern!: String;
  pinPattern!: string;
  formValid: boolean = true;
  @Input()
  error!: string | null;
  isSubmitted!: boolean;
  
  constructor(private service: SignupService, private toastr: ToastrService, private _service: NotificationsService,
    private router: Router, private authentocationService: LoginService, private _formBuilder: FormBuilder) { 
    this.registerForm = this._formBuilder.group(
      {
        name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        email: new FormControl(null, Validators.email),
        contactNo: new FormControl(null, Validators.required),
        pin: new FormControl(null, Validators.required),
        dob: new FormControl(null, Validators.required)
      }
    )
    this.emailPattern = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
    this.contactNoPattern = '^[6,7,8,9]{1}[0-9]{9}$';
    this.pinPattern = '^[0-9]{4}';
    }

  ngOnInit(): void {
    // this.registerForm = new FormGroup(
    //   {
    //     name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    //     email: new FormControl(null, Validators.required),
    //     contactNo: new FormControl(null, Validators.required),
    //     pin: new FormControl(null, Validators.required),
    //     dob: new FormControl(null, Validators.required)
    //   }
    // )
    this.authentocationService.logOut();
  }

    submitForm(){
      this.isSubmitted = true;
      const userDetails = {
        name: this.registerForm.value.name,
        email: this.registerForm.value.email,
        contactNo: this.registerForm.value.contactNo,
        pin: this.registerForm.value.pin,
        dob: this.registerForm.value.dob.year + '-'
          + (this.registerForm.value.dob.month < 10 ? '0' + this.registerForm.value.dob.month : this.registerForm.value.dob.month) + '-'
          + (this.registerForm.value.dob.day < 10 ? '0' + this.registerForm.value.dob.day : this.registerForm.value.dob.day)

      };
      this.service.onRegister(userDetails).subscribe(
        response => {
          this.router.navigate(['/login']);
          this.toastr.success("welcome");
        },
        
        (error: HttpErrorResponse) => {
          
          

          this._service.error("try again", "use another contactNo", {
            position: ['bottom', 'right'],
            timeOut: 5000,
            animate: 'fade',
            pauseOnHover: true,
            clickToClose: false,
            clickIconToClose: true,
            showProgressBar: true
          });
          console.log('this is client side error');
          console.log('this is client side error');
          console.log(this.error);

          if (error && error['error'] && error['error']['message'] === 'Unauthorized') {
            this.toastr.error('Invalid username or password.');
            return throwError(error);
          }
          return throwError(
            this.toastr.error(error.error));


        }
      );
    }

    get u() {
      return this.registerForm.controls;
    }
  }



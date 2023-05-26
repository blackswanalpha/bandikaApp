import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import {
 
  MatDatepickerModule, 
 
 
} from '@angular/material/datepicker';
import {

 MatNativeDateModule,


} from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { InterceptorService } from './loader/interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { PricingComponent } from './pricing/pricing.component';
import { DetailsComponent } from './details/details.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';



@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    HomeComponent,
    NavComponent,
    CreateComponent,
    ImageuploadComponent,
    PricingComponent,
    DetailsComponent,
    AppointmentComponent,
    NewsfeedComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatStepperModule,
    SimpleNotificationsModule.forRoot(),
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './loader/auth-guard.service';
import { LoginGuardService } from './loader/login-guard.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { PricingComponent } from './pricing/pricing.component';
import { DetailsComponent } from './details/details.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent, canActivate: [LoginGuardService] },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardService] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },

  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  { path: 'create', component: CreateComponent, canActivate: [AuthGuardService] },
  { path: 'pricing', component: PricingComponent, canActivate: [AuthGuardService] },
  { path: 'details', component: DetailsComponent, canActivate: [AuthGuardService] },
  { path: 'appointment', component: AppointmentComponent, canActivate: [AuthGuardService] },
  { path: '', component: NewsfeedComponent, canActivate: [LoginGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

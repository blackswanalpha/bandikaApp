import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { routeTransitionAnimations } from '../animations';
import { LoginService } from '../login/login.service';
import { Subject } from 'rxjs';


@UntilDestroy()
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [routeTransitionAnimations]
})
export class NavComponent  {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  private _refreshNeeded$ = new Subject<void>();
 hidden = false;
  constructor(private observer: BreakpointObserver, private router: Router, public loginService: LoginService) { }
 toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  ngOnInit(): void {

     this.toggleBadgeVisibility();
  }


  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches || !this.loginService.isUserLoggedIn() ) {
          this.sidenav.mode = 'side';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'over';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'side') {
          this.sidenav.close();
        }
      });
  }



}

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private alertService: AlertService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      var user = JSON.parse(localStorage.getItem('currentUser'));
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/accounts/login'], { queryParams: { returnUrl: state.url }});

    this.alertService.error("You're not authorised to do that");
    return false;
  }
}

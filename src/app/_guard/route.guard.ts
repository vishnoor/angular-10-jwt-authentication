import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router } from '@angular/router';
import { Observable } from 'rxjs';

import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private tokenStorageService: TokenStorageService, private router : Router) {}

  isLoggedIn = false;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.isLoggedIn = !!this.tokenStorageService.getToken();

      if (this.isLoggedIn)
      {
        return true;
      }
      else
      {
        window.alert('You must be logged in ');
        return this.router.parseUrl('/login');
      }

  }
}

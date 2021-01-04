import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  private roles: string[];

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const user = this.tokenStorageService.getUser();

    if (user != null) {
      this.roles = user.roles;
    }


    let hasAdminRole = false;

    if (this.roles != null) {
      hasAdminRole = this.roles.includes('ROLE_ADMIN');
    }

    if (!hasAdminRole) {
      return this.router.parseUrl('/noaccess');
    }
    else {
      return true;
    }


  }
}

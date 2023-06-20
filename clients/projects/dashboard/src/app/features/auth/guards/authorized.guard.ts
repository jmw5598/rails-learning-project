import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticatedUser, AuthenticationStatus } from '../state/auth.models';
import { AuthQuery } from '../state/auth.query';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanActivate {
  constructor(
    private _authQuery: AuthQuery,
    private _router: Router,
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._authQuery
      .authenticatedUser$
      .pipe(
        map(authenticatedUser => {
          if (this._isUserUnauthorized(authenticatedUser)) {
            this._router.navigateByUrl('/auth/login');
          }
          return authenticatedUser?.status === AuthenticationStatus.AUTHORIZED
        })
      );
  }

  private _isUserUnauthorized(authenticatedUser: AuthenticatedUser | null | undefined): boolean {
    return !authenticatedUser?.status || authenticatedUser?.status === AuthenticationStatus.UNAUTHORIZED
  }
}

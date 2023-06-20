import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthStore } from './auth.store';
import { AuthenticatedUser, Credentials } from './auth.models';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _baseUrl: string = 'http://localhost:3000/auth';

  constructor(
    protected authStore: AuthStore,
    private _http: HttpClient,
  ) { }

  public login(credentials: Credentials): Observable<AuthenticatedUser> {
    return this._http
      .post<AuthenticatedUser>(`${this._baseUrl}/login`, credentials)
      .pipe(
        tap(authenticateUser => this.authStore.update({ authenticated_user: authenticateUser, error_response: null })),
        catchError(error => {
          this.authStore.update({ error_response: { error: 'Invalid username/password' }});
          return of(error);
        })
      )
  }
}

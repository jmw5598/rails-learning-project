import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthenticatedUser, Credentials } from './auth.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _baseUrl: string = 'http://localhost:3000/auth';

  constructor(
    private _http: HttpClient,
  ) { }

  public login(credentials: Credentials): Observable<AuthenticatedUser> {
    return this._http
      .post<AuthenticatedUser>(`${this._baseUrl}/login`, credentials);
  }
}

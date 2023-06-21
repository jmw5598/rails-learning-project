import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthQuery } from '../../auth/state/auth.query';
import { AuthenticatedUser, AuthenticationStatus } from '../../auth/state/auth.models';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
  constructor(
    private _authQuery: AuthQuery
  ) { }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let modifiedRequest: HttpRequest<unknown> = request;
    const authenticatedUser: AuthenticatedUser | null | undefined = this._authQuery.getValue().authenticated_user

    if (authenticatedUser?.status === AuthenticationStatus.AUTHORIZED) {
      modifiedRequest = this._addAuthorizationHeader(request, authenticatedUser?.tokens?.access_token || '');
    }

    return next.handle(modifiedRequest);
  }

  private _addAuthorizationHeader(request: HttpRequest<unknown>, accessToken: string): HttpRequest<unknown> {
    const authorizationHeaderValue: string = `Bearer ${accessToken}`;
    return request.clone({
      setHeaders: {
        Authorization: authorizationHeaderValue 
      }
    });
  }
}

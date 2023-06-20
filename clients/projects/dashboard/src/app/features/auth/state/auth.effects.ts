import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@datorama/akita-ng-effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { ErrorResponse } from '../../core/models';
import * as AuthActions from './auth.actions';
import { AuthService } from './auth.service';
import { AuthStore } from './auth.store';

@Injectable()
export class AuthEffects {
  constructor(
    private _actions$: Actions,
    private _authStore: AuthStore,
    private _authService: AuthService,
    private _router: Router,
  ) {}

  public loginRequest$ = createEffect(() => 
    this._actions$
      .pipe(
        ofType(AuthActions.loginRequest),
        switchMap(({ credentials }) => 
          this._authService.login(credentials)
            .pipe(
              map(authenticatedUser => 
                AuthActions.loginRequestSuccess({ authenticatedUser })  
              ),
              catchError(error => 
                of(AuthActions.loginRequestError({ 
                  response: { error: 'Invalid username/password' } as ErrorResponse 
                }))
              )
            )
        ),
      ),
      { dispatch: true }
  );

  public loginRequestSuccess$ = createEffect(() => 
    this._actions$
      .pipe(
        ofType(AuthActions.loginRequestSuccess),
        tap(({ authenticatedUser }) => {
          this._authStore.update({ authenticated_user: authenticatedUser }),
          this._router.navigateByUrl('/')
        })
      ),
    { dispatch: false }
  );

  public loginRequestError$ = createEffect(() => 
    this._actions$
      .pipe(
        ofType(AuthActions.loginRequestError),
        tap(({ response }) =>
          this._authStore.update({ error_response: response })
        )
      ),
    { dispatch: false }
  );
}

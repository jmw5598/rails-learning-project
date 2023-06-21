import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@datorama/akita-ng-effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import * as AccountsActions from './accounts.actions';
import { AccountsService } from './accounts.service';
import { AccountsStore } from './accounts.store';

@Injectable()
export class AccountsEffects {
  constructor(
    private _actions$: Actions,
    private _accountsStore: AccountsStore,
    private _accountsService: AccountsService,
  ) { }

  public findAllAccountsRequest$ = createEffect(() => 
    this._actions$
      .pipe(
        ofType(AccountsActions.findAllAccountsRequest),
        switchMap(() =>
          this._accountsService.find()
            .pipe(
              map(accounts => AccountsActions.findAllAccountsRequestSuccess({ accounts })),
              catchError(error =>
                of(AccountsActions.findAllAccountsRequestFailure({ response: { error: 'Error' } }))
              )
            )
        )
      ),
    { dispatch: true }
  );

  public findAllAccountsRequestSuccess$ = createEffect(() => 
    this._actions$
      .pipe(
        ofType(AccountsActions.findAllAccountsRequestSuccess),
        tap(({ accounts }) => this._accountsStore.add(accounts))
      ),
    { dispatch: false }
  );

  public createAccountRequest$ = createEffect(() => 
    this._actions$
      .pipe(
        ofType(AccountsActions.createAccountRequest),
        switchMap(({ account }) =>{
          console.log("calling create account")
          return this._accountsService.create(account)
            .pipe(
              map(account => AccountsActions.createAccountRequestSuccess({ account })),
              catchError(error =>
                of(AccountsActions.createAccountRequestFailure({ response: { error: 'Error' } }))
              )
            )
                })
      ),
    { dispatch: true }
  );

  public createAccountRequestSuccess$ = createEffect(() => 
    this._actions$
      .pipe(
        ofType(AccountsActions.createAccountRequestSuccess),
        tap(({ account }) => this._accountsStore.add(account))
      ),
    { dispatch: false }
  );

  // public createAccountRequestError$ = createEffect(() => 
  //   this._actions$
  //     .pipe(
  //       ofType(AccountsActions.createAccountRequestError),
  //       tap(({ error }) => this._accountsStore.add(accounts))
  //     ),
  //   { dispatch: false }
  // );
}

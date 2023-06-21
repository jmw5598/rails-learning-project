import { Component } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { Observable } from 'rxjs';
import { findAllAccountsRequest } from '../../state/accounts.actions';
import { Account } from '../../state/accounts.models';
import { AccountsQuery } from '../../state/accounts.query';

@Component({
  selector: 'dmo-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  public accounts$: Observable<Account[]> = this._accountsQuery.selectAll();

  constructor(
    private _actions$: Actions,
    private _accountsQuery: AccountsQuery,
  ) {
    this._actions$.dispatch(findAllAccountsRequest());
  }
}

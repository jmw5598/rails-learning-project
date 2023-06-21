import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AccountsState, AccountsStore } from './accounts.store';

@Injectable({
  providedIn: 'root'
})
export class AccountsQuery extends QueryEntity<AccountsState> {
  constructor(protected override store: AccountsStore) {
    super(store);
  }
}

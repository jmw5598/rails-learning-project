import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Account } from './accounts.models';

export interface AccountsState extends EntityState<Account, number> {
  
}

export function createInitialState(): AccountsState {
  return {
    loading: false,
  }
}

@StoreConfig({
  name: 'accounts'
})
@Injectable({
  providedIn: 'root'
})
export class AccountsStore extends EntityStore<AccountsState> {
  constructor() {
    super(createInitialState());
  }
}

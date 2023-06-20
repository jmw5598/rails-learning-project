import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';

import { AuthenticatedUser } from './auth.models';
import { AuthState, AuthStore } from './auth.store';

@Injectable({
  providedIn: 'root'
})
export class AuthQuery extends Query<AuthState> {
  public authenticatedUser$: Observable<AuthenticatedUser | null | undefined> = this.select(state => state.authenticated_user);
  public errorResponse$: Observable<{ error: string | string[] } | null | undefined> = this.select(state => state.error_response);

  constructor(
    protected override store: AuthStore,
  ) {
    super(store);
  }
}

import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { AuthenticatedUser } from './auth.models';

export interface AuthState {
  authenticated_user: AuthenticatedUser | null | undefined,
  error_response: { error: string | string[] } | null | undefined,
}

export function createInitialState(): AuthState {
  return {
    authenticated_user: null,
    error_response: null,
  } as AuthState
}

@StoreConfig({ 
  name: 'auth' 
})
@Injectable({ 
  providedIn: 'root' 
})
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState())
  }
}

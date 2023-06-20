import { createAction, props } from '@datorama/akita-ng-effects';

import { ErrorResponse } from '../../core/models';
import { AuthenticatedUser, Credentials } from './auth.models';

export const loginRequest = createAction(
  '[Auth] Login Request',
  props<{ credentials: Credentials }>()
);

export const loginRequestSuccess = createAction(
  '[Auth] Login Request Success',
  props<{ authenticatedUser: AuthenticatedUser }>()
);

export const loginRequestError = createAction(
  '[Auth] Login Request Error',
  props<{ response: ErrorResponse }>()
);

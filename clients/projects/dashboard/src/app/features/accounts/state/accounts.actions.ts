import { createAction, props } from '@datorama/akita-ng-effects';
import { ErrorResponse } from '../../core/models';
import { Account } from './accounts.models';

export const findAllAccountsRequest = createAction(
  '[Accounts] Find All Accounts Request'
);

export const findAllAccountsRequestSuccess = createAction(
  '[Accounts] Find All Accounts Request Success',
  props<{ accounts: Account[] }>()
);

export const findAllAccountsRequestFailure = createAction(
  '[Accounts] Find All Accounts Request Failure',
  props<{ response: ErrorResponse }>()
);

export const createAccountRequest = createAction(
  '[Accounts] Create Account Request',
  props<{ account: Account }>()
);

export const createAccountRequestSuccess = createAction(
  '[Accounts] Create Account Request Success',
  props<{ account: Account }>()
);

export const createAccountRequestFailure = createAction(
  '[Accounts] Create Account Request Failure',
  props<{ response: ErrorResponse }>()
);

export const updateAccountRequest = createAction(
  '[Accounts] Update Account Request',
  props<{ id: number, account: Account }>()
);

export const updateAccountRequestSuccess = createAction(
  '[Accounts] Update Account Request Success',
  props<{ account: Account }>()
);

export const updateAccountRequestFailure = createAction(
  '[Accounts] Update Account Request Failure',
  props<{ response: ErrorResponse }>()
);

export const deleteAccountRequest = createAction(
  '[Accounts] Delete Account Request',
  props<{ id: number }>()
);

export const deleteAccountRequestSuccess = createAction(
  '[Accounts] Delete Account Request Success',
  props<{ account: Account }>()
);

export const deleteAccountRequestFailure = createAction(
  '[Accounts] Delete Account Request Failure',
  props<{ response: ErrorResponse }>()
);

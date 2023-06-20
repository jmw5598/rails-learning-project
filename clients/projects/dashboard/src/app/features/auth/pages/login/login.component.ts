import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actions } from '@datorama/akita-ng-effects';
import { Observable, take } from 'rxjs';

import { loginRequest } from '../../state/auth.actions';
import { AuthenticatedUser, Credentials } from '../../state/auth.models';
import { AuthQuery } from '../../state/auth.query';

@Component({
  selector: 'dmo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public authenticatedUser$: Observable<AuthenticatedUser | null | undefined> = this._authQuery.authenticatedUser$;
  public errorResponse$: Observable<{ error: string | string[]} | null | undefined> = this._authQuery.errorResponse$;

  public authFormGroup: FormGroup = this._formBuilder.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });

  constructor(
    private _actions$: Actions,
    private _authQuery: AuthQuery,
    private _formBuilder: FormBuilder,
  ) { }

  public login(credentials: Credentials): void {
    this._actions$.dispatch(loginRequest({ credentials: credentials }));
  }
}

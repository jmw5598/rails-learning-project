import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actions } from '@datorama/akita-ng-effects';
import { createAccountRequest } from '../../state/accounts.actions';
import { Account } from '../../state/accounts.models';

@Component({
  selector: 'dmo-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountCreateComponent {
  public createAccountFormGroup: FormGroup = this._formBuilder.group({
    name: ['', [Validators.required]]
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _actions$: Actions,
  ) { }

  public create(account: Account): void {
    this._actions$.dispatch(createAccountRequest({ account }));
    this.createAccountFormGroup.reset();
  }
}

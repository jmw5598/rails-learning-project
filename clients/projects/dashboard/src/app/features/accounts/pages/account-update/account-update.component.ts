import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actions } from '@datorama/akita-ng-effects';
import { Account } from '../../state/accounts.models';

@Component({
  selector: 'dmo-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountUpdateComponent {
  public updateAccountFormGroup: FormGroup = this._formBuilder.group({
    id: [null, [Validators.required]],
    name: ['', [Validators.required]]
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _actions$: Actions,
  ) { }

  public update(account: Account): void {
    console.log("updating", account);
    // this._actions$.dispatch(createAccountRequest({ account }));
    // this.createAccountFormGroup.reset();
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { AuthenticatedUser, AuthenticationStatus, Credentials } from '../../state/auth.models';
import { AuthQuery } from '../../state/auth.query';
import { AuthService } from '../../state/auth.service';

@Component({
  selector: 'dmo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public authenticatedUser$: Observable<AuthenticatedUser | null | undefined> = this._authQuery.authenticatedUser$;
  public errorResponse$: Observable<{ error: string | string[]} | null | undefined> = this._authQuery.errorResponse$;

  public authFormGroup: FormGroup = this._formBuilder.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });

  constructor(
    private _authService: AuthService,
    private _authQuery: AuthQuery,
    private _formBuilder: FormBuilder,
    private _router: Router,
  ) { }

  public login(credentials: Credentials): void {
    this._authService
      .login(credentials)
      .pipe(take(1))
      .subscribe(authenticatedUser => {
        if (authenticatedUser?.status === AuthenticationStatus.AUTHORIZED) {
          this._router.navigateByUrl('/');
        }
      });
  }
}

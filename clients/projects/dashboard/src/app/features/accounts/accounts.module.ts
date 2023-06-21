import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsEffects } from './state/accounts.effects';
import { AccountCreateComponent } from './pages/account-create/account-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountUpdateComponent } from './pages/account-update/account-update.component';



@NgModule({
  declarations: [
    AccountsComponent,
    AccountCreateComponent,
    AccountUpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountsRoutingModule,
    AkitaNgEffectsModule.forFeature([AccountsEffects]),
  ]
})
export class AccountsModule { }

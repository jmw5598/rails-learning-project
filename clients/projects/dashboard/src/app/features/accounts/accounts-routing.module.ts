import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreateComponent } from './pages/account-create/account-create.component';
import { AccountUpdateComponent } from './pages/account-update/account-update.component';
import { AccountsComponent } from './pages/accounts/accounts.component';

const routes: Routes = [
  {
    path: 'create',
    component: AccountCreateComponent,
  },
  {
    path: ':id/update',
    component: AccountUpdateComponent,
  },
  {
    path: '',
    component: AccountsComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule { }

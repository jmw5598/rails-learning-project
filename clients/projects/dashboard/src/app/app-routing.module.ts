import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './features/auth/guards/authorized.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    canActivate: [AuthorizedGuard],
    loadChildren: () => import('./features/application/application.module').then(m => m.ApplicationModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'auth',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

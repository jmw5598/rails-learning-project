import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './pages/application/application.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    ApplicationComponent,
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
  ]
})
export class ApplicationModule { }

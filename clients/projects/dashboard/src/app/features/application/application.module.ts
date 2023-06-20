import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './pages/application/application.component';

@NgModule({
  declarations: [
    ApplicationComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
  ]
})
export class ApplicationModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AkitaNgEffectsModule.forFeature([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

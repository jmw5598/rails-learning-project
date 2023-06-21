import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtTokenInterceptor } from './interceptors/jwt-token.interceptor';

const jwtTokenInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtTokenInterceptor,
  multi: true
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    jwtTokenInterceptor,
  ]
})
export class CoreModule { }

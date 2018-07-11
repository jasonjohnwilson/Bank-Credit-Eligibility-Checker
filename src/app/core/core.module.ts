import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { JQ_TOKEN } from './services/jquery.service';
import { TOASTR_TOKEN } from './services/toastr.token';
import { ToastrService } from './services/toastr.service';
import { APP_INITIALIZER } from '@angular/core';
import { AppConfig } from './config/app-config';
import { IAuthenticationSettings } from './config/authentication-settings.model';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule } from '@angular/common/http';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

const jQuery: any = window['$'];
const toastr: any = window['toastr'];

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [ HttpClientModule ],
  declarations: [],
  providers: [
    ToastrService,
    { provide: JQ_TOKEN, useValue: jQuery },
    { provide: TOASTR_TOKEN, useValue: toastr },
    AppConfig
    // ,{ provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppConfig], multi: true }
  ]
})
export class CoreModule { }

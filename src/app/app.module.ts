import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCoreModule } from './core-modules/material-core/material-core.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OpenWeatherModule} from './page-modules/open-weather/open-weather.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ValidationDateRequestInterceptor} from './core-modules/rest-core-module/interceptors/validation-date-request.interceptor';
import {CacheService} from './core-modules/rest-core-module/services/cache.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialCoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Page-modules
    OpenWeatherModule
  ],
  exports: [MaterialCoreModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ValidationDateRequestInterceptor,
      multi: true,
      deps: [CacheService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { WeatherInfoComponent } from './common-ui/weather-info/weather-info.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {reducers} from './redux';
import { WeatherInfoEffects } from './redux/effects/weather-info.effects';

@NgModule({
  declarations: [
    AppComponent,
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
    OpenWeatherModule,

    StoreModule.forRoot(reducers, {}),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

    EffectsModule.forRoot([]),

    StoreRouterConnectingModule.forRoot(),

    EffectsModule.forFeature([(WeatherInfoEffects)])
  ],
  exports: [
    MaterialCoreModule
  ],
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


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenWeatherComponent } from './open-weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialCoreModule } from '../../core-modules/material-core/material-core.module';
import {CommonUiModule} from '../../common-ui/common-ui.module';
import {OpenWeatherRoutingModule} from './open-weather-routing.module';

@NgModule({
  declarations: [OpenWeatherComponent],
  imports: [
    CommonModule,
    MaterialCoreModule,
    ReactiveFormsModule,
    CommonUiModule,
    OpenWeatherRoutingModule
  ],
})
export class OpenWeatherModule { }

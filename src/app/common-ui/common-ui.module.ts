import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherInfoComponent} from './weather-info/weather-info.component';
import {MaterialCoreModule} from '../core-modules/material-core/material-core.module';



@NgModule({
  declarations: [
    WeatherInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialCoreModule
  ],
  exports: [
    WeatherInfoComponent,
  ]
})
export class CommonUiModule { }

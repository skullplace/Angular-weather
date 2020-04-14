import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenWeatherComponent } from './open-weather/open-weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialCoreModule } from '../../core-modules/material-core/material-core.module';

@NgModule({
  declarations: [OpenWeatherComponent],
  imports: [
    CommonModule,
    MaterialCoreModule,
    ReactiveFormsModule
  ],
})
export class OpenWeatherModule { }

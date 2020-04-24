import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherStackRoutingModule } from './weather-stack-routing.module';
import { WeatherStackComponent } from './weather-stack.component';
import {AppModule} from '../../app.module';
import {CommonUiModule} from '../../common-ui/common-ui.module';
import {MaterialCoreModule} from '../../core-modules/material-core/material-core.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [WeatherStackComponent],
  imports: [
    CommonModule,
    WeatherStackRoutingModule,
    CommonUiModule,
    MaterialCoreModule,
    ReactiveFormsModule
  ]
})
export class WeatherStackModule { }

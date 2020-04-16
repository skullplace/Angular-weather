import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherStackRoutingModule } from './weather-stack-routing.module';
import { WeatherStackComponent } from './weather-stack.component';
import {AppModule} from '../../app.module';
import {CommonUiModule} from '../../common-ui/common-ui.module';


@NgModule({
  declarations: [WeatherStackComponent],
  imports: [
    CommonModule,
    WeatherStackRoutingModule,
    CommonUiModule
  ]
})
export class WeatherStackModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherStackComponent} from './weather-stack.component';


const routes: Routes = [
  {path: '', component: WeatherStackComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherStackRoutingModule { }

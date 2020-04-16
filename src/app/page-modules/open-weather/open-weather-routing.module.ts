import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenWeatherComponent } from './open-weather.component';

const routes: Routes = [
  {path: '', component: OpenWeatherComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenWeatherRoutingModule { }

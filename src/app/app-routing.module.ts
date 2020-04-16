import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '' , loadChildren: () => import('./page-modules/open-weather/open-weather.module').then(m => m.OpenWeatherModule)},
  {path: 'alternative', loadChildren: () => import('./page-modules/weather-stack/weather-stack.module').then(m => m.WeatherStackModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

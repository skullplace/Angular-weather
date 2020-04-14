import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenWeatherComponent } from './page-modules/open-weather/open-weather.component';
import {IpOrCoordsModule} from './page-modules/ip-or-coords/ip-or-coords.module';


const routes: Routes = [
  {path: '' , component: OpenWeatherComponent},
  {path: 'alternative', loadChildren: () => import('./page-modules/ip-or-coords/ip-or-coords.module').then(m => m.IpOrCoordsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

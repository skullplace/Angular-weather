import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IpOrCoordsComponent} from './ip-or-coords.component';


const routes: Routes = [
  {path: '', component: IpOrCoordsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpOrCoordsRoutingModule { }

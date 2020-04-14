import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpOrCoordsRoutingModule } from './ip-or-coords-routing.module';
import { IpOrCoordsComponent } from './ip-or-coords.component';
import {AppModule} from '../../app.module';
import {CommonUiModule} from '../../common-ui/common-ui.module';


@NgModule({
  declarations: [IpOrCoordsComponent],
  imports: [
    CommonModule,
    IpOrCoordsRoutingModule,
    CommonUiModule
  ]
})
export class IpOrCoordsModule { }

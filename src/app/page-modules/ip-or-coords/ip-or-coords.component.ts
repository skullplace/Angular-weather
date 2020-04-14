import { Component, OnInit } from '@angular/core';
import {RestService} from '../../core-modules/rest-core-module/resources/rest.service';
import {OpenWeatherCoordsDto} from '../../core-modules/rest-core-module/resources/rest-core-model';

@Component({
  selector: 'app-ip-or-coords',
  templateUrl: './ip-or-coords.component.html',
  styleUrls: ['./ip-or-coords.component.scss']
})
export class IpOrCoordsComponent implements OnInit {

  constructor(
    private restService: RestService,
  ) { }

  ngOnInit(): void {
    // this.get();
  }


  // get() {
  //     navigator.geolocation.getCurrentPosition(
  //       position => {
  //         return this.restService.geByCoords({lon: position.coords.longitude, lat: position.coords.latitude});
  //         },
  //       accessDinied => {
  //         return this.restService.getByIp('');
  //       });
  //   }
}

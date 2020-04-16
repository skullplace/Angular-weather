import { Component, OnInit } from '@angular/core';
import {RestService} from '../../core-modules/rest-core-module/resources/rest.service';
import {OpenWeatherCoordsDto} from '../../core-modules/rest-core-module/resources/rest-core-model';

@Component({
  selector: 'app-ip-or-coords',
  templateUrl: './weather-stack.component.html',
  styleUrls: ['./weather-stack.component.scss']
})
export class WeatherStackComponent implements OnInit {

  constructor(
    private restService: RestService,
  ) { }

  ngOnInit(): void {
    this.restService.getWeatherStack().subscribe(v => console.log(v));
  }

}

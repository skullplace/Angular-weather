import { Component, OnInit } from '@angular/core';
import {RestService} from '../../core-modules/rest-core-module/resources/rest.service';
import {OpenWeatherCoordsDto, WeatherStackDto} from '../../core-modules/rest-core-module/resources/rest-core-model';

@Component({
  selector: 'app-ip-or-coords',
  templateUrl: './weather-stack.component.html',
  styleUrls: ['./weather-stack.component.scss']
})
export class WeatherStackComponent implements OnInit {

  public weatherInfo: WeatherStackDto;

  constructor(
    private restService: RestService,
  ) { }

  ngOnInit(): void {
    this.restService.getWeatherStack().subscribe((data: WeatherStackDto) => this.weatherInfo = data);
  }

}

import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {OpenWeatherDto} from '../../core-modules/rest-core-module/resources/rest-core-model';
import {WeatherInfo} from '../resources/common-ui-model';
import {formatDate} from '@angular/common';
import {getLabelDayByNumber} from '../common-ui-utils';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit, OnChanges {
  @Input() data: OpenWeatherDto;

  public weatherInfo: WeatherInfo;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && this.data) {
      this.weatherInfo = {
        date: formatDate(new Date(this.data.dt * 1000), 'dd.MM.yyyy', 'en-US'),
        day: getLabelDayByNumber(new Date(this.data.dt * 1000).getDay()),
        humidity: this.data.sys.humidity,
        temp: this.data.main.temp,
        feels_like: this.data.main.feels_like,
        pressure: this.data.main.pressure,
        speed: this.data.wind.speed,
        deg: this.data.wind.deg,
      };
    }
  }



}

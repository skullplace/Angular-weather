import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {OpenWeatherDto, WeatherStackDto} from '../../core-modules/rest-core-module/resources/rest-core-model';
import {WeatherInfo} from '../resources/common-ui-model';
import {formatDate} from '@angular/common';
import {addition, getLabelDayByNumber} from '../common-ui-utils';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit, OnChanges {
  @Input() data: OpenWeatherDto | WeatherStackDto;
  @Input() cameFrom: string;

  public weatherInfo: WeatherInfo;
  public addition;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && this.data) {
      console.log(this.data);
      if (this.cameFrom === 'open-weather') {
        this.weatherInfo = {
          date: formatDate(new Date(this.data.dt * 1000), 'dd.MM.yyyy', 'en-US'),
          day: getLabelDayByNumber(new Date(this.data.dt * 1000).getDay()),
          humidity: this.data.main.humidity,
          temp: (this.data.main.temp - 273).toFixed(0),
          feels_like: (this.data.main.feels_like - 273).toFixed(0),
          pressure: this.data.main.pressure,
          speed: this.data.wind.speed,
          deg: this.data.wind.deg,
        };
      } else {
        this.weatherInfo = {
          date: formatDate(new Date(this.data.location.localtime_epoch * 1000), 'dd.MM.yyyy', 'en-US'),
          day: getLabelDayByNumber(new Date(this.data.location.localtime_epoch * 1000).getDay()),
          humidity: this.data.current.humidity,
          temp: this.data.current.temperature.toFixed(0),
          feels_like: this.data.current.feelslike.toFixed(0),
          pressure: this.data.current.pressure,
          speed: this.data.current.wind_speed,
          deg: this.data.current.wind_degree,
        };
      }

      this.addition = addition;
    }
  }



}

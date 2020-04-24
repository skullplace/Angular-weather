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
  @Input() data: WeatherInfo;

  public weatherInfo: WeatherInfo;
  public addition;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && this.data) {
      console.log(this.data);
      this.weatherInfo = this.data;

      this.addition = addition;
    }
  }



}

import {AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {HttpService} from '../../core-modules/rest-core-module/services/http.service';
import {RestService} from '../../core-modules/rest-core-module/resources/rest.service';
import {OpenWeatherDto} from '../../core-modules/rest-core-module/resources/rest-core-model';
import {WeatherInfo} from '../../common-ui/resources/common-ui-model';


@Component({
  selector: 'app-open-weather',
  templateUrl: 'open-weather.component.html',
  styleUrls: ['open-weather.component.scss']
})
export class OpenWeatherComponent implements OnInit, AfterViewInit {
  public form: FormGroup;

  public weatherInfo: WeatherInfo;

  constructor(
    private formBuilder: FormBuilder,
    private restService: RestService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      location: ''
    });


  }

  /**
   *
   */
  getWeather(): void {
    this. weatherInfo = this.restService.getOpenWeather();
  }



  ngAfterViewInit(): void {
    this.getWeather();
    console.log(this.weatherInfo);
  }
}

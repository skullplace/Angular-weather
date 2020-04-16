import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {HttpService} from '../../core-modules/rest-core-module/services/http.service';
import {RestService} from '../../core-modules/rest-core-module/resources/rest.service';
import {OpenWeatherDto} from '../../core-modules/rest-core-module/resources/rest-core-model';


@Component({
  selector: 'app-open-weather',
  templateUrl: 'open-weather.component.html',
  styleUrls: ['open-weather.component.scss']
})
export class OpenWeatherComponent implements OnInit {
  public form: FormGroup;

  public weatherInfo: OpenWeatherDto;

  constructor(
    private formBuilder: FormBuilder,
    private restService: RestService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      location: ''
    });

    // navigator.geolocation.getCurrentPosition(
    //   position => console.log(position),
    //   accessDinied => console.log('ne poshlo')
    //   /api/location/search/?lattlong=(latt),(long) - погода по коордам
    //
    //   http://free.ipwhois.io/json/
    // );

    this.getWeather();
  }

  /**
   *
   */
  getWeather(): void {
    this.restService.getOpenWeather().subscribe(data => this.weatherInfo = data);
  }
}

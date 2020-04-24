import {AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HttpService} from '../../core-modules/rest-core-module/services/http.service';
import {RestService} from '../../core-modules/rest-core-module/resources/rest.service';
import {OpenWeatherDto} from '../../core-modules/rest-core-module/resources/rest-core-model';
import {WeatherInfo} from '../../common-ui/resources/common-ui-model';
import {interval} from 'rxjs';


@Component({
  selector: 'app-open-weather',
  templateUrl: 'open-weather.component.html',
  styleUrls: ['open-weather.component.scss']
})
export class OpenWeatherComponent implements OnInit {
  public form: FormGroup;
  public weatherInfo: WeatherInfo;

  constructor(
    private formBuilder: FormBuilder,
    private restService: RestService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      location: ''
    }, {Validators: Validators.minLength(3)});

    this.restService.getOpenWeatherDefault().subscribe( weather =>
      this.weatherInfo = weather
    );

  }

  /**
   *
   */
  getWeather(): void {
    if (this.form.value.location) {
      this.restService.getOpenWeather(this.form.value.location).subscribe(weather => {
        this.weatherInfo = weather;
      });
    }
  }
}

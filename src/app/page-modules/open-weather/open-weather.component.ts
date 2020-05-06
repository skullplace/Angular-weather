import {AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HttpService} from '../../core-modules/rest-core-module/services/http.service';
import {RestService} from '../../core-modules/rest-core-module/resources/rest.service';
import {OpenWeatherDto} from '../../core-modules/rest-core-module/resources/rest-core-model';
import {WeatherInfo} from '../../common-ui/resources/common-ui-model';
import {interval} from 'rxjs';
import {Store} from '@ngrx/store';
import {WeatherInfoState} from '../../redux/reducers/weather-Info/weather-info.reducer';
import {OpenWeatherAction, OpenWeatherDefaultAction, WeatherStackAction} from '../../redux/reducers/weather-Info/weather-info.actions';
import {selectOpenWeatherInfo, selectWeatherInfoFeature} from '../../redux/reducers/weather-Info/weather-info.selector';
import {map} from 'rxjs/operators';


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
    private store$: Store<WeatherInfoState>
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      location: ''
    }, {Validators: Validators.minLength(3)});

    this.store$.dispatch(new OpenWeatherDefaultAction({info: this.restService.getOpenWeatherDefault()}));
    this.store$.select(selectOpenWeatherInfo).subscribe(v => v.subscribe(weather => this.weatherInfo = weather));
  }

  /**
   *
   */
  getWeather(): void {
    if (this.form.value.location) {
      this.store$.dispatch(new OpenWeatherAction({info: this.restService.getOpenWeather(this.form.value.location)}));
      this.store$.select(selectOpenWeatherInfo).subscribe(v => v.subscribe(weather => this.weatherInfo = weather));
    }

  }
}

import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {RestService} from '../../core-modules/rest-core-module/resources/rest.service';
import {WeatherInfo} from '../../common-ui/resources/common-ui-model';
import {Store} from '@ngrx/store';
import {WeatherInfoState} from '../../redux/reducers/weather-info.reducer';
import {OpenWeatherAction, OpenWeatherDefaultAction} from '../../redux/actions/weather-info.actions';
import {selectWeatherInfo} from '../../redux/selectors/weather-info.selector';
import {ActivatedRoute} from '@angular/router';


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
    private store$: Store<WeatherInfoState>,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      location: ''
    }, {Validators: Validators.minLength(3)});

    this.store$.dispatch(new OpenWeatherDefaultAction());
    this.store$.select(selectWeatherInfo)
      .subscribe(weather => this.weatherInfo = weather[weather.length - 1]);
  }

  /**
   *
   */
  getWeather(): void {
    if (this.form.value.location) {
      this.store$.dispatch(new OpenWeatherAction({query: this.form.value.location}));
    }
  }
}

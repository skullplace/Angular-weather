import {Component, OnInit} from '@angular/core';
import {RestService} from '../../core-modules/rest-core-module/resources/rest.service';
import {WeatherInfo} from '../../common-ui/resources/common-ui-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WeatherStackAction, WeatherStackDefaultAction} from '../../redux/actions/weather-info.actions';
import {Store} from '@ngrx/store';
import {WeatherInfoState} from '../../redux/reducers/weather-info.reducer';
import {selectWeatherInfo} from '../../redux/selectors/weather-info.selector';

@Component({
  selector: 'app-ip-or-coords',
  templateUrl: './weather-stack.component.html',
  styleUrls: ['./weather-stack.component.scss']
})
export class WeatherStackComponent implements OnInit {

  public form: FormGroup;

  public weatherInfo: WeatherInfo;

  constructor(
    private restService: RestService,
    private formBuilder: FormBuilder,
    private store$: Store<WeatherInfoState>
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      location: ''
    }, {Validators: Validators.minLength(3)});
    this.store$.dispatch(new WeatherStackDefaultAction());
    this.store$.select(selectWeatherInfo)
      .subscribe(weather => this.weatherInfo = weather[weather.length - 1]);

  }

  getWeather() {
    if (this.form.value.location) {
      this.store$.dispatch(new WeatherStackAction({query: this.form.value.location}));
    }
  }

}

import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {RestService} from '../../core-modules/rest-core-module/resources/rest.service';
import {OpenWeatherCoordsDto, WeatherStackDto} from '../../core-modules/rest-core-module/resources/rest-core-model';
import {WeatherInfo} from '../../common-ui/resources/common-ui-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WeatherStackAction, WeatherStackDefaultAction} from '../../redux/reducers/weather-Info/weather-info.actions';
import {Store} from '@ngrx/store';
import {WeatherInfoState} from '../../redux/reducers/weather-Info/weather-info.reducer';
import {selectOpenWeatherInfo, selectWeatherStackInfo} from '../../redux/reducers/weather-Info/weather-info.selector';

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

    this.store$.dispatch(new WeatherStackDefaultAction({info: this.restService.getWeatherStackDefault()}));
    this.store$.select(selectWeatherStackInfo).subscribe(v => v.subscribe(weather => this.weatherInfo = weather));
  }

  getWeather() {
    if (this.form.value.location) {

      this.store$.dispatch(new WeatherStackDefaultAction({info: this.restService.getWeatherStack(this.form.value.location)}));
      this.store$.select(selectWeatherStackInfo).subscribe(v => v.subscribe(weather => this.weatherInfo = weather));

    }
  }

}

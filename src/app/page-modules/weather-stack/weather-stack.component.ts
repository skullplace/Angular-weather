import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {RestService} from '../../core-modules/rest-core-module/resources/rest.service';
import {OpenWeatherCoordsDto, WeatherStackDto} from '../../core-modules/rest-core-module/resources/rest-core-model';
import {WeatherInfo} from '../../common-ui/resources/common-ui-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      location: ''
    }, {Validators: Validators.minLength(3)});

    this.restService.getWeatherStackDefault().subscribe(weather => {
      this.weatherInfo = weather;
    });
  }

  getWeather() {
    if (this.form.value.location) {
      this.restService.getWeatherStack(this.form.value.location).subscribe(weather => {
        this.weatherInfo = weather;
      });
    }
  }

}

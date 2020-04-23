import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {RestService} from '../../core-modules/rest-core-module/resources/rest.service';
import {OpenWeatherCoordsDto, WeatherStackDto} from '../../core-modules/rest-core-module/resources/rest-core-model';
import {WeatherInfo} from '../../common-ui/resources/common-ui-model';

@Component({
  selector: 'app-ip-or-coords',
  templateUrl: './weather-stack.component.html',
  styleUrls: ['./weather-stack.component.scss']
})
export class WeatherStackComponent implements OnInit {

  public weatherInfo: WeatherInfo;

  constructor(
    private restService: RestService,
  ) { }

  ngOnInit(): void {
    this.restService.getWeatherStack().subscribe(weather => {
      this.weatherInfo = weather;
    });
  }

}

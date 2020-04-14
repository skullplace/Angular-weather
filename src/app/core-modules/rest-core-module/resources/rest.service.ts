import { Injectable } from '@angular/core';
import {HttpService} from '../services/http.service';
import {Observable} from 'rxjs';
import {OpenWeatherDto} from './rest-core-model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private readonly URL_OPEN_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?q=location&appid=api-key';
  private readonly KEY_OPEN_WEATHER = 'd6375deea930ad107ac06fb9c15fe986';

  constructor(private http: HttpService ) { }

  getOpenWeather(location: string): Observable<OpenWeatherDto> {
    return this.http.get(this.URL_OPEN_WEATHER, {location, key: this.KEY_OPEN_WEATHER});
  }
}

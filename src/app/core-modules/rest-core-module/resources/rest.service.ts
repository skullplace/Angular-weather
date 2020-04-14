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
  private readonly URL_IP_API = '';
  private readonly KEY_IP_API = '';

  constructor(private httpService: HttpService ) { }

  /**
   * function, which sent hhtp request to OpenWeather.com
   * @param {string} location
   * @return {Observable<OpenWeatherDto>}
   */
  getOpenWeather(location: string): Observable<OpenWeatherDto> {
    return this.httpService.get(this.URL_OPEN_WEATHER, {location, key: this.KEY_OPEN_WEATHER});
  }

  getByIp(ip: string) {
    return this.httpService.get(this.URL_IP_API, {location: ip, key: this.KEY_IP_API});
  }
  //
  // getByCoords() {
  //   return this.httpService.get('',{})
  // }

}

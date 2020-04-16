import { Injectable } from '@angular/core';
import {HttpService} from '../services/http.service';
import {Observable, of} from 'rxjs';
import {IpWhoIsDto, OpenWeatherDto} from './rest-core-model';
import {switchMap, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private readonly URL_OPEN_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?location&appid=api-key';
  private readonly KEY_OPEN_WEATHER = 'd6375deea930ad107ac06fb9c15fe986';
  private readonly URL_WEATHER_STACK = 'http://api.weatherstack.com/current?access_key=api-key&query=location';
  private readonly KEY_WEATHER_STACK = 'a9fef7ca2ec94e8daba53cb3d1ba157a';
  private readonly URL_IP_API = 'http://free.ipwhois.io/json/';
  private readonly KEY_IP_API = '';

  private location: IpWhoIsDto;

  constructor(private httpService: HttpService ) { }

  /**
   * function, which sent hhtp request to OpenWeather.com
   * @param {string} location
   * @return {Observable<OpenWeatherDto>}
   */
  getOpenWeather(): Observable<OpenWeatherDto> {
    // this.getIp().subscribe(info => location = {lat: info.latitude, lon: info.longitude});
    if (this.location) {
      const lattlong = `lat=${this.location.latitude}&lon=${this.location.longitude}`;
      return this.httpService.get(this.URL_OPEN_WEATHER, {location: lattlong, key: this.KEY_OPEN_WEATHER});
    }

  }

  getWeatherStack() {
    return this.getIp().pipe(
      take(1),
      switchMap( info => this.httpService.get(this.URL_WEATHER_STACK, {location: info.city, key: this.KEY_WEATHER_STACK})),
    );
  }

  // this.httpService.get(this.URL_WEATHER_STACK, {location: info.city, key: this.KEY_WEATHER_STACK}))

  getIp(): Observable<IpWhoIsDto> {
    return this.httpService.get(this.URL_IP_API, {location: '', key: ''});
  }

}

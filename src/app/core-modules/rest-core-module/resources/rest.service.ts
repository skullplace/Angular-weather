import {Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';
import {Observable, of} from 'rxjs';
import {IpApiDto, IpIfyDto, IpWhoIsDto, OpenWeatherDto, WeatherStackDto} from './rest-core-model';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {formatDate} from '@angular/common';
import {getLabelDayByNumber, icons} from '../../../common-ui/common-ui-utils';
import {WeatherInfo} from '../../../common-ui/resources/common-ui-model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private readonly URL_OPEN_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?location&appid=api-key';
  private readonly KEY_OPEN_WEATHER = 'd6375deea930ad107ac06fb9c15fe986';
  private readonly URL_WEATHER_STACK = 'http://api.weatherstack.com/current?access_key=api-key&query=location';
  private readonly KEY_WEATHER_STACK = 'a9fef7ca2ec94e8daba53cb3d1ba157a';
  private readonly URL_IPAPI_API = 'http://api.ipapi.com/api/location?access_key=api-key&output=json';
  private readonly KEY_IPAPI_API = '93b140c4d402ade09d491d17836a38f3';
  private readonly URL_IP_API = 'https://api.ipify.org/?format=json';

  private location: IpWhoIsDto;

  constructor(private httpService: HttpService) {
  }

  /**
   * function, which sent hhtp request to OpenWeather.com
   * @return {Observable<OpenWeatherDto | any>}
   */
  getOpenWeather(location?: string): Observable<WeatherInfo> {
    return this.httpService.get(this.URL_OPEN_WEATHER, {location: `q=${location.toLowerCase()}`, key: this.KEY_OPEN_WEATHER}).pipe(
      map((weatherInfo: OpenWeatherDto) => {
          return {
            date: formatDate(new Date(weatherInfo.dt * 1000), 'dd.MM.yyyy', 'en-US'),
            day: getLabelDayByNumber(new Date(weatherInfo.dt * 1000).getDay()),
            humidity: weatherInfo.main.humidity,
            temp: (weatherInfo.main.temp - 273).toFixed(0),
            feels_like: (weatherInfo.main.feels_like - 273).toFixed(0),
            pressure: weatherInfo.main.pressure,
            speed: weatherInfo.wind.speed,
            deg: weatherInfo.wind.deg,
            city: weatherInfo.name,
            icon: icons[weatherInfo.weather[0].description.toLowerCase()]
          };
        }
      )
    );
  }

  getOpenWeatherDefault(): Observable<WeatherInfo> {
    return this.getInfoByIp().pipe(
      switchMap((info: IpApiDto) => {
        return this.httpService.get(this.URL_OPEN_WEATHER,
          {location: `lat=${info.latitude}&lon=${info.latitude}`, key: this.KEY_OPEN_WEATHER});
      })
    ).pipe(
      map((weatherInfo: OpenWeatherDto) => {
        console.log(weatherInfo);
        return {
          date: formatDate(new Date(weatherInfo.dt * 1000), 'dd.MM.yyyy', 'en-US'),
          day: getLabelDayByNumber(new Date(weatherInfo.dt * 1000).getDay()),
          humidity: weatherInfo.main.humidity,
          temp: (weatherInfo.main.temp - 273).toFixed(0),
          feels_like: (weatherInfo.main.feels_like - 273).toFixed(0),
          pressure: weatherInfo.main.pressure,
          speed: weatherInfo.wind.speed,
          deg: weatherInfo.wind.deg,
          city: weatherInfo.name,
          icon: icons[weatherInfo.weather[0].description.toLowerCase()]
        };
      }),
    );
  }

  /**
   * function, which sent hhtp request to Weatherstack.com
   * @return {Observable<WeatherStackDto | any>}
   */
  getWeatherStack(): Observable<WeatherInfo> {
    return this.getInfoByIp().pipe(
      switchMap((info: IpApiDto) => this.httpService.get(this.URL_WEATHER_STACK, {location: info.city, key: this.KEY_WEATHER_STACK})),
    ).pipe(map((weatherInfo: WeatherStackDto) => {
        const {humidity, temperature, feelslike, pressure, wind_speed, wind_degree} = weatherInfo.current;
        return {
          date: formatDate(new Date(weatherInfo.location.localtime_epoch * 1000), 'dd.MM.yyyy', 'en-US'),
          day: getLabelDayByNumber(new Date(weatherInfo.location.localtime_epoch * 1000).getDay()),
          humidity,
          temp: temperature.toFixed(0),
          feels_like: feelslike.toFixed(0),
          pressure,
          speed: wind_speed,
          deg: wind_degree,
          city: weatherInfo.location.name,
          icon: icons[weatherInfo.current.weather_descriptions[0].toLowerCase()]
        };
      })
    );
  }

  /**
   * function, that sent hhtp request to Ipwhois.com
   * @return {Observable<IpWhoIsDto>}
   */
  getIp(): Observable<IpIfyDto> {
    return this.httpService.get(this.URL_IP_API, {location: '', key: ''});
  }

  getInfoByIp(): Observable<IpApiDto> {
    return this.getIp().pipe(
      switchMap((ip: IpIfyDto) => this.httpService.get<IpApiDto>(this.URL_IPAPI_API, {location: ip.ip, key: this.KEY_IPAPI_API}))
    );
  }

}

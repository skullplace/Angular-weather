import {Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';
import {Observable, of} from 'rxjs';
import {IpApiDto, IpIfyDto, IpWhoIsDto, OpenWeatherDto, VkApiDto, WeatherStackDto} from './rest-core-model';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {formatDate} from '@angular/common';
import {getLabelDayByNumber, icons, services} from '../../../common-ui/common-ui-utils';
import {WeatherInfo} from '../../../common-ui/resources/common-ui-model';
import {HttpClient} from '@angular/common/http';

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
  private readonly URL_VK_API = 'https://oauth.vk.com/authorize?client_id=api-key&display=page' +
    '&redirect_uri=http://localhost:4200/&scope=friends,photos,status&response_type=token&v=5.52';
  private readonly KEY_VK_API = '7460067';
  private readonly TOKEN_VK_API = 'c554da691beabaa75499f3827b156fb799b66929c5285ee3b1aa9444795d5a133ffe5a354a939f8ad3d12';
  private readonly URL_VK_PHOTOINFO_API = 'https://api.vk.com/method/photos.get?' +
    'owner_id=location&album_id=profile&rev=1&access_token=api-key&v=5.52';
  private readonly URL_VK_PROFILEINFO_API = 'https://api.vk.com/method/account.getProfileInfo?' +
    '&access_token=api-key&v=5.52' ;

  private _isLogined = false;
  private _userId = '';

  constructor(private httpService: HttpService, private http: HttpClient) {
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

  getWeatherStack(location?: string): Observable<WeatherInfo> {
    if (location) {
      return this.httpService.get(this.URL_WEATHER_STACK, {location, key: this.KEY_WEATHER_STACK}).pipe(
        map((weatherInfo: WeatherStackDto) => {
          return this.parseWeatherStackInfo(weatherInfo);
        })
      );
    } else {
      return this.getInfoByIp().pipe(
        switchMap((info: IpApiDto) =>
          this.httpService.get(this.URL_WEATHER_STACK, {location: info.region_name, key: this.KEY_WEATHER_STACK})),
      ).pipe(
        map((weatherInfo: WeatherStackDto) => {
          return this.parseWeatherStackInfo(weatherInfo);
        })
      );
    }
  }

  getOpenWeather(location?: string): Observable<WeatherInfo> {
    if (location) {
      return this.httpService.get(this.URL_OPEN_WEATHER, {location: `q=${location.toLowerCase()}`, key: this.KEY_OPEN_WEATHER}).pipe(
        map((weatherInfo: OpenWeatherDto) => {
          return this.parseOpenWeatherInfo(weatherInfo);
        })
      );
    } else {
      return this.getInfoByIp().pipe(
        switchMap((info: IpApiDto) =>
          this.httpService.get(
            this.URL_OPEN_WEATHER, {location: `lat=${info.latitude}&lon=${info.longitude}`, key: this.KEY_OPEN_WEATHER})),
      ).pipe(
        map((weatherInfo: OpenWeatherDto) => {
          return this.parseOpenWeatherInfo(weatherInfo);
        })
      );
    }
  }

  private parseWeatherStackInfo(weather: WeatherStackDto): WeatherInfo {
    const {humidity, temperature, feelslike, pressure, wind_speed, wind_degree} = weather.current;
    return {
      date: formatDate(new Date(weather.location.localtime_epoch * 1000), 'dd.MM.yyyy', 'en-US'),
      day: getLabelDayByNumber(new Date(weather.location.localtime_epoch * 1000).getDay()),
      humidity,
      temp: temperature.toFixed(0),
      feels_like: feelslike.toFixed(0),
      pressure,
      speed: wind_speed.toFixed(0),
      deg: wind_degree,
      city: weather.location.name,
      icon: icons[weather.current.weather_descriptions[0].toLowerCase()]
    };
  }

  private parseOpenWeatherInfo(weather: OpenWeatherDto) {
    return {
      date: formatDate(new Date(weather.dt * 1000), 'dd.MM.yyyy', 'en-US'),
      day: getLabelDayByNumber(new Date(weather.dt * 1000).getDay()),
      humidity: weather.main.humidity,
      temp: (weather.main.temp - 273).toFixed(0),
      feels_like: (weather.main.feels_like - 273).toFixed(0),
      pressure: weather.main.pressure,
      speed: weather.wind.speed.toFixed(0),
      deg: weather.wind.deg,
      city: weather.name,
      icon: icons[weather.weather[0].description.toLowerCase()]
    };
  }

  getVkPhoto(location: string): Observable<VkApiDto> {
    return this.httpService.get(this.URL_VK_PHOTOINFO_API, {location, key: this.TOKEN_VK_API});
  }

  getVkProfileInfo(): Observable<any> {
    return this.httpService.get(this.URL_VK_PROFILEINFO_API, {location: '', key: this.TOKEN_VK_API});
  }


  get isLogined(): boolean {
    return this._isLogined;
  }

  set isLogined(value: boolean) {
    this._isLogined = value;
  }

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }
}



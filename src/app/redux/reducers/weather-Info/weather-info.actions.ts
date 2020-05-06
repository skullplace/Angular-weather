import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {WeatherInfo} from '../../../common-ui/resources/common-ui-model';

export enum weatherInfoActionsType {
  openWeather = '[WEATHER_INFO] openweather.com',
  openWeatherDefault = '[WEATHER_INFO] init data from openweather.com',
  weatherStack = '[WEATHER_INFO] weatherstack.com',
  weatherStackDefault = '[WEATHER_INFO] init data from weatherstack.com',
  update = '[WEATHER-INFO] updated'
}

export class OpenWeatherAction implements Action {
  readonly type = weatherInfoActionsType.openWeather;
  constructor(public payload: {info: Observable<WeatherInfo>}) {
  }
}

export class OpenWeatherDefaultAction implements Action {
  readonly type = weatherInfoActionsType.openWeatherDefault;

  constructor(public payload: {info: Observable<WeatherInfo>}) {
  }
}

export class WeatherStackAction implements Action {
  readonly type = weatherInfoActionsType.weatherStack;

  constructor(public payload: {info: Observable<WeatherInfo>}) {
  }
}

export class WeatherStackDefaultAction implements Action {
  readonly type = weatherInfoActionsType.weatherStackDefault;

  constructor(public payload: {info: Observable<WeatherInfo>}) {
  }
}

export class WeatherInfoUpdateAction implements Action {
  readonly type = weatherInfoActionsType.update;
}

export type WeatherInfoActions = OpenWeatherAction | WeatherStackAction
    | WeatherInfoUpdateAction | WeatherStackDefaultAction | OpenWeatherDefaultAction;

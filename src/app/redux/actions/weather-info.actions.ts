import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {WeatherInfo} from '../../common-ui/resources/common-ui-model';
import {services} from '../../common-ui/common-ui-utils';

export enum weatherInfoActionsType {
  openWeather = '[WEATHER_INFO] openweather.com',
  openWeatherDefault = '[WEATHER_INFO] init data from openweather.com',
  weatherStack = '[WEATHER_INFO] weatherstack.com',
  weatherStackDefault = '[WEATHER_INFO] init data from weatherstack.com',
  success = '[WEATHER-INFO] load successful',
  failure = '[WEATHER-INFO] load failure',
}

export class OpenWeatherAction implements Action {
  readonly type = weatherInfoActionsType.openWeather;
  constructor(public payload: {query: string}) {
  }
}

export class OpenWeatherDefaultAction implements Action {
  readonly type = weatherInfoActionsType.openWeatherDefault;
}

export class WeatherStackAction implements Action {
  readonly type = weatherInfoActionsType.weatherStack;

  constructor(public payload: {query: string}) {
  }
}

export class WeatherStackDefaultAction implements Action {
  readonly type = weatherInfoActionsType.weatherStackDefault;
}

export class LoadWeatherInfoSuccesAction implements Action {
  readonly type = weatherInfoActionsType.success;
  constructor( public payload: {info: WeatherInfo, service: services, query: string }) {}
}

export class LoadWeatherInfoFailureAction implements Action {
  readonly type = weatherInfoActionsType.failure;
}

export type WeatherInfoActions = OpenWeatherAction | WeatherStackAction | WeatherStackDefaultAction
  | OpenWeatherDefaultAction| LoadWeatherInfoFailureAction | LoadWeatherInfoSuccesAction;

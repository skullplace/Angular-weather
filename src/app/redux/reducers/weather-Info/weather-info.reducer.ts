import {WeatherInfo} from '../../../common-ui/resources/common-ui-model';
import {WeatherInfoActions, weatherInfoActionsType} from './weather-info.actions';
import {Observable} from 'rxjs';
import {services} from '../../../common-ui/common-ui-utils';

export const weatherInfoFeatureKey = 'weather-info';

export interface WeatherInfoState {
  openWeatherInfo: WeatherInfo;
  weatherStackInfo: WeatherInfo;
  query: string;
}

export const initialState: WeatherInfoState = {
  openWeatherInfo: null,
  weatherStackInfo: null,
  query: null,
};



export const WeatherInfoReducer = (state = initialState, action: WeatherInfoActions) => {
  switch (action.type) {
    case weatherInfoActionsType.openWeather:
      return {...state, query: action.payload.query};
    case weatherInfoActionsType.openWeatherDefault:
      return {...state};
     case weatherInfoActionsType.weatherStack:
       return {...state, query: action.payload.query};
    case weatherInfoActionsType.weatherStackDefault:
      return {...state};
     case weatherInfoActionsType.update:
       if (action.payload.service === services.openWeather) {
         return {...state, openWeatherInfo: action.payload.info};
       }
       return {...state, weatherStackInfo: action.payload.info};
    case weatherInfoActionsType.failure:
      return {...state};
    case weatherInfoActionsType.success:
      return {...state};
    default:
      return state;
  }
};

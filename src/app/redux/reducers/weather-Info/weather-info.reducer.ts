import {WeatherInfo} from '../../../common-ui/resources/common-ui-model';
import {WeatherInfoActions, weatherInfoActionsType} from './weather-info.actions';
import {Observable} from 'rxjs';

export const weatherInfoFeatureKey = 'weather-info';

export interface WeatherInfoState {
  openWeatherInfo: Observable<WeatherInfo>;
  weatherStackInfo: Observable<WeatherInfo>;
}

export const initialState: WeatherInfoState = {
  openWeatherInfo: null,
  weatherStackInfo: null
};



export const WeatherInfoReducer = (state = initialState, action: WeatherInfoActions) => {
  switch (action.type) {
    case weatherInfoActionsType.openWeather:
      return {...state, openWeatherInfo: action.payload.info};
    case weatherInfoActionsType.openWeatherDefault:
      return {...state, openWeatherInfo: action.payload.info};
     case weatherInfoActionsType.weatherStack:
       return {...state, weatherStackInfo: action.payload.info};
    case weatherInfoActionsType.weatherStackDefault:
      return {...state, weatherStackInfo: action.payload.info};
     case weatherInfoActionsType.update:
       return {...state};
    default:
      return state;
  }
};

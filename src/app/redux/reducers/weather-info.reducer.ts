import {WeatherInfo} from '../../common-ui/resources/common-ui-model';
import {WeatherInfoActions, weatherInfoActionsType} from '../actions/weather-info.actions';
import {Observable} from 'rxjs';
import {services} from '../../common-ui/common-ui-utils';

export const weatherInfoFeatureKey = 'weather-info';

export interface WeatherInfoState {
  weatherInfo: WeatherInfo[];
}

export const initialState: WeatherInfoState = {
  weatherInfo: [],
};



export const WeatherInfoReducer = (state = initialState, action: WeatherInfoActions) => {
  switch (action.type) {
    case weatherInfoActionsType.openWeather:
      return {...state};
    case weatherInfoActionsType.openWeatherDefault:
      return {...state};
     case weatherInfoActionsType.weatherStack:
       return {...state};
    case weatherInfoActionsType.weatherStackDefault:
      return {...state};
     case weatherInfoActionsType.success:
       return {...state,
         weatherInfo: [...state.weatherInfo, {...action.payload.info, service: action.payload.service, query: action.payload.query}]};
    case weatherInfoActionsType.failure:
      return {...state};
    default:
      return state;
  }
};



import {WeatherInfo} from '../../common-ui/resources/common-ui-model';
import {WeatherInfoActions, weatherInfoActionsType} from '../actions/weather-info.actions';
import {VkInfo} from '../../core-modules/rest-core-module/resources/rest-core-model';

export const weatherInfoFeatureKey = 'weather-info';

export interface WeatherInfoState {
  weatherInfo: WeatherInfo[];
  vkInfo: VkInfo;
}

export const initialState: WeatherInfoState = {
  weatherInfo: [],
  vkInfo: {
    name: '',
    owner_id: '',
    photo: ''
  }
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
    case weatherInfoActionsType.vkPhoto:
      console.log(action.payload.info);
      return {...state, vkInfo: {...state.vkInfo, owner_id: action.payload.info}};
    case weatherInfoActionsType.vkSuccess:
      return {...state, vkInfo: {...state.vkInfo, photo: action.payload.photo}};
    case weatherInfoActionsType.success:
       return {...state,
         weatherInfo: [...state.weatherInfo, {...action.payload.info, service: action.payload.service, query: action.payload.query}]};
    case weatherInfoActionsType.failure:
      if (action.payload.error) {
        alert(action.payload.error.message);
      } else {
        alert('Что-то пошло не так :(');
      }
      console.log(action.payload.error);
      return {...state};
    default:
      return state;
  }
};




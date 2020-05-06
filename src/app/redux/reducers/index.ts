import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {weatherInfoFeatureKey, WeatherInfoReducer, WeatherInfoState} from './weather-Info/weather-info.reducer';

export interface State {
  [weatherInfoFeatureKey]: WeatherInfoState;
}


export const reducers: ActionReducerMap<State> = {
  // @ts-ignore
  [weatherInfoFeatureKey]: WeatherInfoReducer
};

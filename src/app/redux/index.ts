import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {weatherInfoFeatureKey, WeatherInfoState, WeatherInfoReducer} from './reducers/weather-info.reducer';
import {WeatherInfo} from '../common-ui/resources/common-ui-model';


export interface State {
  [weatherInfoFeatureKey]: WeatherInfoState;
}


export const reducers: ActionReducerMap<State> = {
  [weatherInfoFeatureKey]: WeatherInfoReducer
};


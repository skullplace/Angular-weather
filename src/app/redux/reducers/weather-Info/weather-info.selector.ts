import { createFeatureSelector, createSelector } from '@ngrx/store';
import {weatherInfoFeatureKey, WeatherInfoState} from './weather-info.reducer';
import {WeatherInfo} from '../../../common-ui/resources/common-ui-model';
import {map} from 'rxjs/operators';

export const selectWeatherInfoFeature = createFeatureSelector<WeatherInfoState>(weatherInfoFeatureKey);

export const selectOpenWeatherInfo = createSelector(
  selectWeatherInfoFeature,
  (state: WeatherInfoState) => state.openWeatherInfo
);

export const selectWeatherStackInfo = createSelector(
  selectWeatherInfoFeature,
  (state: WeatherInfoState) => state.weatherStackInfo
);

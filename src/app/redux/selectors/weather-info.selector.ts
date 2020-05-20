import { createFeatureSelector, createSelector } from '@ngrx/store';
import {weatherInfoFeatureKey, WeatherInfoState} from '../reducers/weather-info.reducer';
import {WeatherInfo} from '../../common-ui/resources/common-ui-model';
import {map} from 'rxjs/operators';

export const selectWeatherInfoFeature = createFeatureSelector<WeatherInfoState>(weatherInfoFeatureKey);

export const selectWeatherInfo = createSelector(
  selectWeatherInfoFeature,
  (state: WeatherInfoState) => state.weatherInfo
);

export const selectVkInfo = createSelector(
  selectWeatherInfoFeature,
  (state: WeatherInfoState) => state.vkInfo
);

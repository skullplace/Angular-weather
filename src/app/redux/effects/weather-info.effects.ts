import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
// import {countActionsType, CountUpdateAction} from './redux/reducers/count/counter.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  LoadWeatherInfoFailureAction,
  LoadWeatherInfoSuccesAction,
  OpenWeatherAction, OpenWeatherDefaultAction,
  weatherInfoActionsType,
  WeatherStackAction, WeatherStackDefaultAction
} from '../actions/weather-info.actions';
import {RestService} from '../../core-modules/rest-core-module/resources/rest.service';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {WeatherInfoState} from '../reducers/weather-info.reducer';
import {services} from '../../common-ui/common-ui-utils';


class WeatherInfoActions {
}

@Injectable()
export class WeatherInfoEffects {

  constructor(
    private actions$: Actions,
    private restService: RestService,
    private store$: Store<WeatherInfoState>
  ) {
  }

  @Effect()
  public getOpenWeatherInfo$(): Observable<WeatherInfoActions> {
    return this.actions$.pipe(
      ofType(weatherInfoActionsType.openWeather),
      switchMap(
        (location: OpenWeatherAction) =>
          this.restService.getOpenWeather(location.payload.query),
      ),
      map((weather) =>
        new LoadWeatherInfoSuccesAction({
          info: weather,
          service: services.openWeather,
          query: weather.city
        })
      ),
      catchError(() => of(new LoadWeatherInfoFailureAction()))
    );
  }

  @Effect()
  public getOpenWeatherDefaultInfo$(): Observable<WeatherInfoActions> {
    return this.actions$.pipe(
      ofType(weatherInfoActionsType.openWeatherDefault),
      switchMap(
        (location: OpenWeatherDefaultAction) => {
          return this.restService.getOpenWeatherDefault();
        },
      ),
      map((weather) =>
        new LoadWeatherInfoSuccesAction({
          info: weather,
          service: services.openWeather,
          query: weather.city
        })
      ),
      catchError(() => of(new LoadWeatherInfoFailureAction()))
    );
  }

  @Effect()
  public getWeatherStackInfo$(): Observable<WeatherInfoActions> {
    return this.actions$.pipe(
      ofType(weatherInfoActionsType.weatherStack),
      switchMap(
        (location: WeatherStackAction) => {
          return this.restService.getWeatherStack(location.payload.query);
        },
      ),
      map((weather) =>
        new LoadWeatherInfoSuccesAction({
          info: weather,
          service: services.weatherStack,
          query: weather.city
        })
      ),
      catchError(() => of(new LoadWeatherInfoFailureAction()))
    );
  }

  @Effect()
  public getWeatherStackDefaultInfo$(): Observable<WeatherInfoActions> {
    return this.actions$.pipe(
      ofType(weatherInfoActionsType.weatherStackDefault),
      switchMap(
        (location: WeatherStackDefaultAction) => {
          return this.restService.getWeatherStackDefault();
        },
      ),
      map((weather) =>
        new LoadWeatherInfoSuccesAction({
          info: weather,
          service: services.weatherStack,
          query: weather.city
        })
      ),
      catchError(() => of(new LoadWeatherInfoFailureAction()))
    );
  }


}

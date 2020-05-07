import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
// import {countActionsType, CountUpdateAction} from './redux/reducers/count/counter.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  LoadWeatherInfoFailureAction,
  LoadWeatherInfoSuccesAction,
  OpenWeatherAction, OpenWeatherDefaultAction,
  weatherInfoActionsType,
  WeatherInfoUpdateAction, WeatherStackAction, WeatherStackDefaultAction
} from './redux/reducers/weather-Info/weather-info.actions';
import {RestService} from './core-modules/rest-core-module/resources/rest.service';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import {WeatherInfoState} from './redux/reducers/weather-Info/weather-info.reducer';
import {services} from './common-ui/common-ui-utils';


@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions,
    private restService: RestService,
    private store$: Store<WeatherInfoState>
  ) {
  }

  // @Effect()
  // getWeatherInfo$() {
  //   return this.actions$.pipe(
  //     ofType(weatherInfoActionsType.weatherStackDefault,
  //       weatherInfoActionsType.weatherStack),
  //     catchError(error => of(new LoadWeatherInfoFailureAction())),
  //     map(() => {
  //       return new LoadWeatherInfoSuccesAction();
  //     }),
  //   );
  // }

  @Effect()
  getOpenWeatherInfo$() {
    return this.actions$.pipe(
      ofType(weatherInfoActionsType.openWeather),
      switchMap(
        (location: OpenWeatherAction) => {
          return this.restService.getOpenWeather(location.payload.query);
        },
      ),
      map( (weather) => {
        this.store$.dispatch(new WeatherInfoUpdateAction({
          info: weather,
          service: services.openWeather
        }));
        return new LoadWeatherInfoSuccesAction();
      } ),
      catchError(() => of(new LoadWeatherInfoFailureAction()))
    );
  }

  @Effect()
  getOpenWeatherDefaultInfo$() {
    return this.actions$.pipe(
      ofType(weatherInfoActionsType.openWeatherDefault),
      switchMap(
        (location: OpenWeatherDefaultAction) => {
          return this.restService.getOpenWeatherDefault();
        },
      ),
      map( (weather) => {
        this.store$.dispatch(new WeatherInfoUpdateAction({
          info: weather,
          service: services.openWeather
        }));
        return new LoadWeatherInfoSuccesAction();
      } ),
      catchError(() => of(new LoadWeatherInfoFailureAction()))
    );
  }

  @Effect()
  getWeatherStackInfo$() {
    return this.actions$.pipe(
      ofType(weatherInfoActionsType.weatherStack),
      switchMap(
        (location: WeatherStackAction) => {
          return this.restService.getWeatherStack(location.payload.query);
        },
      ),
      map( (weather) => {
        this.store$.dispatch(new WeatherInfoUpdateAction({
          info: weather,
          service: services.weatherStack
        }));
        return new LoadWeatherInfoSuccesAction();
      } ),
      catchError(() => of(new LoadWeatherInfoFailureAction()))
    );
  }

  @Effect()
  getWeatherStackDefaultInfo$() {
    return this.actions$.pipe(
      ofType(weatherInfoActionsType.weatherStackDefault),
      switchMap(
        (location: WeatherStackDefaultAction) => {
          return this.restService.getWeatherStackDefault();
        },
      ),
      map( (weather) => {
        this.store$.dispatch(new WeatherInfoUpdateAction({
          info: weather,
          service: services.weatherStack
        }));
        return new LoadWeatherInfoSuccesAction();
      } ),
      catchError(() => of(new LoadWeatherInfoFailureAction()))
    );
  }


}

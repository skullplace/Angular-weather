import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
// import {countActionsType, CountUpdateAction} from './redux/reducers/count/counter.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {
  LoadVkInfoSuccessAction, LoadVkPhotoInfoAction,
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
      catchError((err) => of(new LoadWeatherInfoFailureAction(err)))
    );
  }

  @Effect()
  public getOpenWeatherDefaultInfo$(): Observable<WeatherInfoActions> {
    return this.actions$.pipe(
      ofType(weatherInfoActionsType.openWeatherDefault),
      switchMap(
        (location: OpenWeatherDefaultAction) => {
          return this.restService.getOpenWeather();
        },
      ),
      map((weather) =>
        new LoadWeatherInfoSuccesAction({
          info: weather,
          service: services.openWeather,
          query: weather.city
        })
      ),
      catchError((err) => of(new LoadWeatherInfoFailureAction(err)))
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
      catchError((err) => of(new LoadWeatherInfoFailureAction(err)))
    );
  }

  @Effect()
  public getWeatherStackDefaultInfo$(): Observable<WeatherInfoActions> {
    return this.actions$.pipe(
      ofType(weatherInfoActionsType.weatherStackDefault),
      switchMap(
        (location: WeatherStackDefaultAction) => {
          return this.restService.getWeatherStack();
        },
      ),
      map((weather) =>
        new LoadWeatherInfoSuccesAction({
          info: weather,
          service: services.weatherStack,
          query: weather.city
        })
      ),
      catchError((err) => of(new LoadWeatherInfoFailureAction(err)))
    );
  }

  @Effect()
  public getVkInfo$(): Observable<WeatherInfoActions> {
    return this.actions$.pipe(
      ofType(weatherInfoActionsType.vkPhoto),
      switchMap ((userInfo: LoadVkPhotoInfoAction) => {
        return this.restService.getVkPhoto(userInfo.payload.info);
      }),
      map( userInfo => new LoadVkInfoSuccessAction({
        photo: userInfo.response.items[0].photo_75,
      })),
      switchMap( () => {
        return this.restService.getVkProfileInfo();
      }),
      map( value => {
        console.log(value);
        return of(null);
      } )
    );
  }

}

import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
// import {countActionsType, CountUpdateAction} from './redux/reducers/count/counter.actions';
import {map} from 'rxjs/operators';
import {weatherInfoActionsType, WeatherInfoUpdateAction, WeatherStackAction} from './redux/reducers/weather-Info/weather-info.actions';
import {RestService} from './core-modules/rest-core-module/resources/rest.service';
import {of} from 'rxjs';


@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions,
    private restService: RestService
  ) {
  }

  // @Effect()
  // updatedAt$() {
  //   return this.actions$.pipe(
  //     ofType(countActionsType.increase, countActionsType.decrease, countActionsType.clear),
  //     map(() => {
  //       return new CountUpdateAction(
  //         {updatedAt: Date.now()}
  //         );
  //     })
  //   );
  // }

  @Effect()
  getWeatherInfo$() {
    return this.actions$.pipe(
      ofType(weatherInfoActionsType.weatherStackDefault, weatherInfoActionsType.openWeatherDefault,
        weatherInfoActionsType.openWeather, weatherInfoActionsType.weatherStack),
      map( () => {
        return new WeatherInfoUpdateAction();
      })
    );
  }


}

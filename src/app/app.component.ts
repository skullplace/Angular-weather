import {Component, OnInit, Output} from '@angular/core';
import {HttpService} from './core-modules/rest-core-module/services/http.service';
import {Router, Routes} from '@angular/router';
import {RestService} from './core-modules/rest-core-module/resources/rest.service';
import {select, Store} from '@ngrx/store';

import {Observable} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'weather';
  selectedTab: string;

  constructor(
    private router: Router,
    private restService: RestService,
    // private store$: Store<CountState>
    ) {}

  public routes = [
    {name: 'Openweathermap.com', route: ''},
    {name: 'Weatherstack.com', route: '/alternative'},

  ];

  // public count$: Observable<number> = this.store$.pipe(select(selectCount));
  // public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdatedAt));

  ngOnInit(): void {
    this.restService.getIp();
  }
  //
  // increase() {
  //   this.store$.dispatch(new CountIncreaseAction());
  // }
  //
  // decrease() {
  //   this.store$.dispatch(new CountDecreaseAction());
  // }
  //
  // clear() {
  //   this.store$.dispatch(new CountClearAction());
  // }

}

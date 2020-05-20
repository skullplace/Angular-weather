import {AfterContentChecked, AfterContentInit, Component, DoCheck, OnInit, Output} from '@angular/core';
import {HttpService} from './core-modules/rest-core-module/services/http.service';
import {ActivatedRoute, Router, Routes} from '@angular/router';
import {RestService} from './core-modules/rest-core-module/resources/rest.service';
import {select, Store} from '@ngrx/store';

import {Observable} from 'rxjs';
import {WeatherInfoState} from './redux/reducers/weather-info.reducer';
import {LoadVkPhotoInfoAction} from './redux/actions/weather-info.actions';
import {selectVkInfo} from './redux/selectors/weather-info.selector';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private restService: RestService,
    private route: ActivatedRoute,
    private store$: Store<WeatherInfoState>,
    ) {}

  public routes = [
    {name: 'Openweathermap.com', route: ''},
    {name: 'Weatherstack.com', route: '/alternative'},
  ];

  public image = '';
  public isLogined = false;

  ngOnInit(): void {
    this.restService.getIp();
    this.route.fragment.subscribe( fragment => {
      if (fragment) {
        this.restService.userId = fragment.substring(this.route.snapshot.fragment.lastIndexOf('=') + 1);
        this.restService.isLogined = true;
        this.isLogined = this.restService.isLogined;
        // this.restService.vk(this.restService.userId).subscribe( photos => this.image = photos.response.items[0].photo_75);
        this.store$.dispatch(new LoadVkPhotoInfoAction({
          info: this.restService.userId
        }));
        this.store$.select(selectVkInfo).subscribe(v => this.image = v.photo);
      }
    });
  }


}

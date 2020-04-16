import {Component, OnInit, Output} from '@angular/core';
import {HttpService} from './core-modules/rest-core-module/services/http.service';
import {Router, Routes} from '@angular/router';
import {RestService} from './core-modules/rest-core-module/resources/rest.service';

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
    ) {}

  public routes = [
    {name: 'Openweathermap.com', route: ''},
    {name: 'Weatherstack.com', route: '/alternative'},

  ];

  ngOnInit(): void {
    this.restService.getIp();
  }

}

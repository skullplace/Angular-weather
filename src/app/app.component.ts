import {Component, OnInit, Output} from '@angular/core';
import {HttpService} from './core-modules/rest-core-module/services/http.service';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';
  selectedTab: string;

  constructor(private router: Router) {}

  private routes = [
    '',
    '/alternative',
  ];

  tabChange(index) {
    this.router.navigateByUrl(this.routes[index]);
  }
}

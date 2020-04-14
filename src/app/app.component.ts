import {Component, OnInit} from '@angular/core';
import {HttpService} from './core-modules/rest-core-module/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';
}

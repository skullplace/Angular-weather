import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {HttpService} from '../../../core-modules/rest-core-module/services/http.service';
import {RestService} from '../../../core-modules/rest-core-module/resources/rest.service';


@Component({
  selector: 'app-open-weather',
  templateUrl: 'open-weather.component.html',
  styleUrls: ['open-weather.component.scss']
})
export class OpenWeatherComponent implements OnInit {
  public form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private rest: RestService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      location: ''
    });
  }

  getWeather() {
    this.rest.getOpenWeather(this.form.value.location.toLowerCase()).subscribe(v => console.log(v));
  }
}

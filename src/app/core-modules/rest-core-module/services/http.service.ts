import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RequestParams} from '../resources/rest-core-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, params: RequestParams): Observable<T> {
    return  this.http.get<T>(
      url.replace('location', params.location).replace('api-key', params.key)
    );
  }
}



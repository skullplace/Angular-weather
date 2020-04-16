import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpEventType
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CacheService} from '../services/cache.service';
import {OpenWeatherDto} from '../resources/rest-core-model';

@Injectable()
export class ValidationDateRequestInterceptor implements HttpInterceptor {
  private readonly LAST_REQUEST_DATE_INTERVAL: number = 2 * 60 * 60 * 1000 ;

  constructor(private cache: CacheService) {}

  /**
   * interceptor, that decides whether to send a request or not, based on the time elapsed from the last request
   * @param {HttpRequest<any>} request
   * @param {HttpHandler} next
   * @return {Observable<HttpEvent<any>>}
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const cacheItem = this.cache.get<OpenWeatherDto>(request.url);

    if (cacheItem && (+Date.now() - cacheItem.createdDate <= this.LAST_REQUEST_DATE_INTERVAL)) {
      return of(new HttpResponse({ body: cacheItem }));
    }

    return next.handle(request).pipe(
      tap((response: HttpResponse<any>) => {
        if (+response.type !== 0) {
          this.cache.set(response.url, response.body);
        }
      })
    );
  }

}

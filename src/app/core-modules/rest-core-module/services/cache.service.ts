import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  /**
   * Get item from local storage by key
   * @param {string} key
   * @return {any}
   */
  get<T>(key: string): T & {createdDate: number} {
    return JSON.parse(localStorage.getItem(key));
  }

  /**
   * Set values to local storage
   * @param {string} key
   * @param {any} value
   */
  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify({createdDate: Date.now(), ...value}));
  }
}

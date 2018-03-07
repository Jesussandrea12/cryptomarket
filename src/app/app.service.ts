import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  URL = 'https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v1/ticker/?limit=100';

  constructor (private http: HttpClient) {}

  getCoins() {
    return this.http.get(this.URL);
  }
}

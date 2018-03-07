import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './app.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CryptoMarket';
  coins: any = [];

  constructor (private http: HttpClient, private service: ConfigService) {}

  ngOnInit() {
    this.service.getCoins().subscribe(data => {
      this.coins = data;
    })
  }
}

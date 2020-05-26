import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home/home.service';
import { timer } from 'rxjs';
import { UpdateTime } from '../updateTime';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loginService: any;
  userToken: string;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    const refresh = timer(UpdateTime.timerDelay, UpdateTime.timerPeriod);
    refresh.subscribe(result => this.testMeth());
  }

  getToken() {
    this.homeService.getToken().subscribe(result => this.userToken = result);
  }

  testMeth() {
    this.getToken();
    console.log(this.userToken);
  }

  deleteToken() {
    this.homeService.clearToken();
  }
}

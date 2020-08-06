import { Component, OnInit, ViewChild, } from '@angular/core';
import { Ticker } from './ticker.model';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ticker';
  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;

  constructor() { }

  ngOnInit() {
    this.massages
  }

  massages: Ticker[] = [
    {imageUrl:"https://material.angular.io/assets/img/examples/shiba2.jpg", userName: "Nina Pnina", date:"06/08/2020 18:33", textMassage: "איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה!!! איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה"},
    {imageUrl:"https://material.angular.io/assets/img/examples/shiba2.jpg", userName: "Nina Pnina", date:"06/08/2020 18:33", textMassage: "איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה!!! איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה"},
    {imageUrl:"https://material.angular.io/assets/img/examples/shiba2.jpg", userName: "Nina Pnina", date:"06/08/2020 18:33", textMassage: "איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה!!! איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה"},
    {imageUrl:"https://material.angular.io/assets/img/examples/shiba2.jpg", userName: "Nina Pnina", date:"06/08/2020 18:34", textMassage: "איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה!!! איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה"},
    {imageUrl:"https://material.angular.io/assets/img/examples/shiba2.jpg", userName: "Nina Pnina", date:"06/08/2020 18:35", textMassage: "איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה!!! איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה"},
    {imageUrl:"https://material.angular.io/assets/img/examples/shiba2.jpg", userName: "Nina Pnina", date:"06/08/2020 18:36", textMassage: "איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה!!! איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה"},
    {imageUrl:"https://material.angular.io/assets/img/examples/shiba2.jpg", userName: "Nina Pnina", date:"06/08/2020 18:37", textMassage: "איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה!!! איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה"},
    {imageUrl:"https://material.angular.io/assets/img/examples/shiba2.jpg", userName: "Nina Pnina", date:"06/08/2020 18:38", textMassage: "איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה!!! איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה"},
    {imageUrl:"https://material.angular.io/assets/img/examples/shiba2.jpg", userName: "Nina Pnina", date:"06/08/2020 18:39", textMassage: "איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה!!! איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה"},
    {imageUrl:"https://material.angular.io/assets/img/examples/shiba2.jpg", userName: "Nina Pnina", date:"06/08/2020 18:40", textMassage: "איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה!!! איזה תוכנית מעולה!!! איזה תוכנית מדימה!!!מעולהההההההה"},
  ];

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 3, sm: 3, md: 3, lg: 3, all: 0 },
    load: 3,
    slide : 1,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2,
    vertical : {
      enabled : true,
      height : 600
    }
  }

}

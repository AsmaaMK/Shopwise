import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BrandsComponent implements OnInit {

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  };

  brnads = [
    'assets/imgs/brand-1.png',
    'assets/imgs/brand-2.png',
    'assets/imgs/brand-3.png',
    'assets/imgs/brand-4.png',
    'assets/imgs/brand-5.png',
    'assets/imgs/brand-6.png',
  ];  

  constructor() { }

  ngOnInit(): void {
    SwiperCore.use([Autoplay]);
  }

}

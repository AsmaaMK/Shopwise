import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-preview-swiper',
  templateUrl: './preview-swiper.component.html',
  styleUrls: ['./preview-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PreviewSwiperComponent implements OnInit {
  imgList = [
    'assets/imgs/preview-1.jpg',
    'assets/imgs/preview-2.jpg',
    'assets/imgs/preview-3.jpg',
    'assets/imgs/preview-4.jpg',
    'assets/imgs/preview-5.jpg',
    'assets/imgs/preview-6.jpg',
    'assets/imgs/preview-7.jpg',
    'assets/imgs/preview-8.jpg',
    'assets/imgs/preview-9.jpg',
    'assets/imgs/preview-10.jpg',
  ];

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    grabCursor: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {
    SwiperCore.use([Autoplay]);
  }
}

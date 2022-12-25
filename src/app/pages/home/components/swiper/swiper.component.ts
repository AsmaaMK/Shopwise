import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, {
  Pagination,
  Autoplay,
  SwiperOptions,
  EffectFade
} from 'swiper';

@Component({
  selector: 'home-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperComponent implements OnInit {
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    effect: 'fade',
    speed: 1000,
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
  };
  
  slides = [
    {
      img: 'assets/imgs/header-3.webp',
      title: 'Sofa Collection',
      describtion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.',
      background: '#d2f6f1',
    },
    {
      img: 'assets/imgs/header-1.webp',
      title: 'Bedroom Collection',
      describtion:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.',
      background: '#ffebd7',
    },
    {
      img: 'assets/imgs/header-2.webp',
      title: 'Living Room Collection',
      describtion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.',
      background: '#bcf5cc',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    SwiperCore.use([Pagination, Autoplay, EffectFade]);
  }
}

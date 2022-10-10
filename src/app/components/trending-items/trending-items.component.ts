import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/models/product';
import SwiperCore, { Navigation } from 'swiper';

@Component({
  selector: 'app-trending-items',
  templateUrl: './trending-items.component.html',
  styleUrls: ['./trending-items.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrendingItemsComponent implements OnInit {
  swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    }, 
  };


  products: Product[] = [
    {
      id: 1,
      name: 'Enim Expedita Sed',
      price: 100,
      oldPrice: 200,
      numberOfReviews: 20,
      rating: 3.5,
      image: 'assets/imgs/1-brown.webp',
      inMyFavorites: true,
    },
    {
      id: 2,
      name: 'Enim Expedita Sed',
      price: 1009,
      oldPrice: 1200,
      numberOfReviews: 32,
      rating: 4,
      image: 'assets/imgs/2-pink.webp',
      inMyFavorites: true,
    },
    {
      id: 3,
      name: 'Enim Expedita Sed',
      price: 199,
      oldPrice: 350,
      numberOfReviews: 130,
      rating: 3,
      image: 'assets/imgs/3-gray.webp',
      inMyFavorites: false,
    },
    {
      id: 6,
      name: 'Enim Expedita Sed',
      price: 111,
      oldPrice: 200,
      numberOfReviews: 5,
      rating: 1.5,
      image: 'assets/imgs/2-white.webp',
      inMyFavorites: true,
    },
    {
      id: 4,
      name: 'Enim Expedita Sed',
      price: 600,
      oldPrice: 900,
      numberOfReviews: 1,
      rating: 5,
      image: 'assets/imgs/4-green.webp',
      inMyFavorites: false,
    },
    {
      id: 5,
      name: 'Enim Expedita Sed',
      price: 300,
      oldPrice: 400,
      numberOfReviews: 3,
      rating: 4.5,
      image: 'assets/imgs/1-red.webp',
      inMyFavorites: true,
    },
    {
      id: 8,
      name: 'Enim Expedita Sed',
      price: 1019,
      numberOfReviews: 20,
      rating: 3.5,
      image: 'assets/imgs/4-white.webp',
      inMyFavorites: true,
    },
    {
      id: 7,
      name: 'Enim Expedita Sed',
      price: 900,
      oldPrice: 1200,
      numberOfReviews: 20,
      rating: 3.5,
      image: 'assets/imgs/3-black.webp',
      inMyFavorites: true,
    },
  ];
  
  constructor() {}
  
  ngOnInit(): void {
    SwiperCore.use([Navigation]);
  }
}

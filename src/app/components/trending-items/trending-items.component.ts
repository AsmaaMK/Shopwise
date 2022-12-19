import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import SwiperCore, { Navigation } from 'swiper';

@Component({
  selector: 'app-trending-items',
  templateUrl: './trending-items.component.html',
  styleUrls: ['./trending-items.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
      },
    },
  };
  
  products!: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    SwiperCore.use([Navigation]);

    this.productsService.getProducts(30, 50).subscribe((res) => {
      this.products = res.products;
    });
  }
}

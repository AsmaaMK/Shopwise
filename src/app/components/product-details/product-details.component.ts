import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import SwiperCore, { SwiperOptions, Navigation } from 'swiper';

import {
  faStar as faStarFilled,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart,
  faStarHalfStroke,
  faStar,
} from '@fortawesome/free-regular-svg-icons';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailsComponent implements OnInit {
  faStarFilled = faStarFilled;
  faStarHalf = faStarHalfStroke;
  faStar = faStar;
  faCart = faCartPlus;
  faHeartFilled = faHeart;

  productId: number = +this.router.url.split('/')[2];
  product!: Product;
  currentImageIndex: number = 0;

  quantity: number = 0;

  swiperOptions: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 16,
    breakpoints: {
      420: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  ratingStars!: { filled: number; half: number; empty: number };

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productsService.getProductById(this.productId).subscribe((product) => {
      console.log(product);
      this.product = product;
      this.calculateRatingStars();
    });
  }

  calculateRatingStars() {
    const filled = Math.floor(this.product.rating);
    const half = this.product.rating % 1 > 0 ? 1 : 0;
    const empty = 5 - filled - half;
    this.ratingStars = { filled, half, empty };
  }

  onZoom(e: any, img: HTMLElement) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = 'scale(2)';
  }

  offZoom(img: HTMLElement) {
    img.style.transformOrigin = 'center center';
    img.style.transform = 'scale(1)';
  }

  addToCart() {
    console.log('add to cart');
  }

  decrementQuantity() {
    if (this.quantity > 0) this.quantity--;
  }

  incrementQuantity() {
    if (this.quantity < this.product.stock) this.quantity++;
  }
}

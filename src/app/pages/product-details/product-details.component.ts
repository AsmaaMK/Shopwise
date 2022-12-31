import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
import { CartService } from 'src/app/services/cart.service';
import { CartProduct } from 'src/app/models/cart';

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

  productId!: number;
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
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    this.route.params.subscribe((params: any) => {
      this.productId = +params.id;
      this.productsService
        .getProductById(this.productId)
        .subscribe((product) => {
          this.product = product;
          this.calculateRatingStars();
        });
    });
  }

  ngOnInit(): void {
    this.quantity = this.cartService.getQuantityOfProduct(this.productId);
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
    const cartProduct: CartProduct = {
      productId: this.productId,
      name: this.product.title,
      price: this.product.price,
      img: this.product.thumbnail,
      quantity: this.quantity,
      stock: this.product.stock
    };
    this.cartService.addToCart(cartProduct);
  }

  decrementQuantity() {
    if (this.quantity > 1) this.quantity--;
  }

  incrementQuantity() {
    if (this.quantity < this.product.stock) this.quantity++;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {
  faStar as faStarFilled,
  faCartPlus,
  faMagnifyingGlassPlus,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart as faHeartFilled,
  faHeart as faHeartOutlined,
  faStarHalfStroke,
  faStar,
} from '@fortawesome/free-regular-svg-icons';
import { CartProduct } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  faHeartFilled = faHeartFilled;
  faheartOutlined = faHeartOutlined;
  faCart = faCartPlus;
  faZoom = faMagnifyingGlassPlus;
  faStarFilled = faStarFilled;
  faStarHalf = faStarHalfStroke;
  faStar = faStar;

  @Input() product!: Product;

  priceOff: number = 0;
  ratingStars!: { filled: number; half: number; empty: number };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.calculateRatingStars();
  }

  calculateRatingStars() {
    const filled = Math.floor(this.product.rating);
    const half = this.product.rating % 1 > 0 ? 1 : 0;
    const empty = 5 - filled - half;
    this.ratingStars = { filled, half, empty };
  }

  toggleFavorite() {
    // this.product.inMyFavorites = !this.product.inMyFavorites;
  }

  openProductDetails() {
    console.log('open product details');
  }

  addToCart() {
    const cartProduct: CartProduct = {
      productId: this.product.id,
      name: this.product.title,
      price: this.product.price,
      img: this.product.thumbnail,
      quantity: 1,
      stock: this.product.stock,
    };
    this.cartService.addToCart(cartProduct);
  }
}

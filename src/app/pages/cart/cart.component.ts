import { Component, OnInit } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { CartProduct } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products!: CartProduct[];

  constructor(
    private cartService: CartService,
    private protectsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.products = this.cartService.getCartProducts();
  }
}

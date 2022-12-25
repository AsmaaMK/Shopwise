import { Component, OnInit } from '@angular/core';
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
  cartProducts!: CartProduct[];
  products: Product[] = [];

  constructor(
    private cartService: CartService,
    private protectsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartProducts();
    this.cartProducts.forEach((product) => {
      this.protectsService
        .getProductById(product.productId)
        .subscribe((res) => {
          this.products.push(res);
        });
    });
  }
}

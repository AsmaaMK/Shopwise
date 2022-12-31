import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  faTrash = faTrash;
  products!: CartProduct[];
  total!: number;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.cartService.getCartProducts();
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.total = 0;
    this.products.forEach((product) => {
      this.total += product.price * product.quantity;
    });
  }

  removeFromCart(productId: number, productIndex: number) {
    this.cartService.removeFromCart(productId);
    this.total -=
      this.products[productIndex].price * this.products[productIndex].quantity;
    this.products.splice(productIndex, 1);
  }

  productQuantityChanged(productIndex: number, productQuantity: number) {
    this.products[productIndex].quantity = productQuantity;
    this.cartService.addToCart(this.products[productIndex]);
    this.calculateTotalPrice();
  }
}

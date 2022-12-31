import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartProduct } from '../models/cart';
import { StorageService } from './storage.service';

const CART_KEY = 'cart_products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private $cartProducts = new BehaviorSubject<CartProduct[]>([]);
  get cartProducts() {
    return this.$cartProducts.asObservable();
  }

  constructor(private storageService: StorageService) {
    this.$cartProducts = this.storageService.getStorageValue(CART_KEY);
    if (!this.$cartProducts) this.$cartProducts;
  }

  getCartProducts() {
    return this.$cartProducts;
  }

  getQuantityOfProduct(productId: number) {
    let productQuantity = 0;
    this.$cartProducts.forEach((product) => {
      if (product.productId == productId) {
        productQuantity = product.quantity;
        return;
      }
    });

    return productQuantity;
  }

  addToCart(product: CartProduct) {
    if (
      product.quantity > 0 &&
      !this.changeQuantityOfProduct(product.productId, product.quantity)
    ) {
      this.$cartProducts = [product, ...this.$cartProducts];
      this.updateStorageValue();
    }
  }

  removeFromCart(productId: number) {
    console.log(this.$cartProducts);
    this.$cartProducts = this.$cartProducts.filter(
      (product) => product.productId !== productId
    );
    console.log(this.$cartProducts);

    // this.updateStorageValue();
  }

  clearCartProducts() {
    this.storageService.removeFromStorage(CART_KEY);
    this.$cartProducts = [];
  }

  private updateStorageValue() {
    this.storageService.setStorageValue(CART_KEY, this.$cartProducts);
  }

  private changeQuantityOfProduct(
    productId: number,
    quantity: number
  ): boolean {
    let productFound: boolean = false;

    this.$cartProducts.forEach((product) => {
      if (product.productId == productId) {
        product.quantity = quantity;
        productFound = true;
        return;
      }
    });
    this.updateStorageValue();

    return productFound;
  }
}
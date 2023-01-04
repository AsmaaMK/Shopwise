import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartProduct } from '../models/cart';
import { StorageService } from './storage.service';

const CART_KEY = 'cart_products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private $cartProducts!: BehaviorSubject<CartProduct[]>;
  get cartProducts() {
    return this.$cartProducts.asObservable();
  }

  constructor(private storageService: StorageService) {
    const CART_IN_STORAGE = this.storageService.getStorageValue(CART_KEY);
    if (CART_IN_STORAGE === undefined)
      this.$cartProducts = new BehaviorSubject<CartProduct[]>([]);
    else
      this.$cartProducts = new BehaviorSubject(
        this.storageService.getStorageValue(CART_KEY)
      );
  }

  getCartProducts() {
    return this.$cartProducts;
  }

  getQuantityOfProduct(productId: number) {
    let productQuantity = 0;
    this.$cartProducts.value.forEach((product) => {
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
      this.$cartProducts.next([product, ...this.$cartProducts.value]);
      this.updateStorageValue();
    }
  }

  removeFromCart(productId: number) {
    this.$cartProducts.next(
      this.$cartProducts.value.filter(
        (product) => product.productId !== productId
      )
    );
    this.updateStorageValue();
  }

  clearCartProducts() {
    this.storageService.removeFromStorage(CART_KEY);
    this.$cartProducts.next([]);
  }

  private updateStorageValue() {
    this.storageService.setStorageValue(CART_KEY, this.$cartProducts.value);
  }

  private changeQuantityOfProduct(
    productId: number,
    quantity: number
  ): boolean {
    let productFound: boolean = false;

    if (!this.$cartProducts.value) return false;

    this.$cartProducts.value.forEach((product) => {
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

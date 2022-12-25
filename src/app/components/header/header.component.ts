import { Component, OnInit } from '@angular/core';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/services/products.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { CartProduct } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faCart = faCartShopping;

  private readonly searchSubject = new Subject<string>();
  private searchSubscription!: Subscription;
  searchResultsPopupIsOpened: boolean = false;
  searchResults!: any[];

  cartProducts!: CartProduct[];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.searchSubscription = this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((searchQuery) =>
          this.productsService.searchProducts(searchQuery)
        )
      )
      .subscribe((results) => {
        this.searchResults = results;
        this.searchResultsPopupIsOpened = true;
      });

    this.cartProducts = this.cartService.getCartProducts();
  }

  onSearchInput(keyword: string) {
    this.searchSubject.next(keyword.trim());
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  openSearchResultsPopup() {
    this.searchResultsPopupIsOpened = true;
  }

  closeSearchResultsPopup() {
    this.searchResultsPopupIsOpened = false;
  }
}

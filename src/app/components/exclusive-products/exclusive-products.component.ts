import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-exclusive-products',
  templateUrl: './exclusive-products.component.html',
  styleUrls: ['./exclusive-products.component.scss'],
})
export class ExclusiveProductsComponent implements OnInit {
  currentPage: number = 1;
  products!: Product[];
  totalNumberOfProducts: number = 100;
  productsPerPage: number = 20;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts(this.productsPerPage, 0)
      .subscribe((res) => {
        this.products = res.products;
        this.totalNumberOfProducts = res.total;
      });
  }

  getCurrentPage($event: number) {
    this.currentPage = $event;

    this.productsService
      .getProducts(
        this.productsPerPage,
        (this.currentPage - 1) * this.productsPerPage
      )
      .subscribe((res) => {
        this.products = res.products;
      });
  }
}

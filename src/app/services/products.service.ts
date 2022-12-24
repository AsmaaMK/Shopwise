import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product, GetProductsResponse } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  searchProducts(query: string): Observable<Product[]> {
    return this.http
      .get<GetProductsResponse>(`${this.apiURL}/products/search?q=${query}`)
      .pipe(map((res) => res.products));
  }

  getProducts(limit: number, skip: number): Observable<GetProductsResponse> {
    return this.http.get<GetProductsResponse>(
      `${this.apiURL}/products?limit=${limit}&skip=${skip}`
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiURL}/products/${id}`);
  }
}

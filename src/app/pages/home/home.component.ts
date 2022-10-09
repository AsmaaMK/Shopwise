import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  product: Product = {
    id: 1,
    name: 'Enim Expedita Sed',
    price: 100,
    oldPrice: 200,
    numberOfReviews: 20,
    rating: 3.5,
    image: 'assets/imgs/1-brown.webp',
    inMyFavorites: true,
  };

  constructor() {}

  ngOnInit(): void {}
}

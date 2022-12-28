import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SwiperComponent } from './pages/home/components/swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { BenefitsComponent } from './pages/home/components/benefits/benefits.component';
import { CardComponent } from './pages/home/components/card/card.component';
import { ExclusiveProductsComponent } from './pages/home/components/exclusive-products/exclusive-products.component';
import { SalesComponent } from './pages/home/components/sales/sales.component';
import { TrendingItemsComponent } from './pages/home/components/trending-items/trending-items.component';
import { PreviewSwiperComponent } from './pages/home/components/preview-swiper/preview-swiper.component';
import { BrandsComponent } from './pages/home/components/brands/brands.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SwiperComponent,
    BenefitsComponent,
    CardComponent,
    ExclusiveProductsComponent,
    SalesComponent,
    TrendingItemsComponent,
    PreviewSwiperComponent,
    BrandsComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    NotFoundComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgxPaginationModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { CardComponent } from './components/card/card.component';
import { ExclusiveProductsComponent } from './components/exclusive-products/exclusive-products.component';
import { SalesComponent } from './components/sales/sales.component';
import { TrendingItemsComponent } from './components/trending-items/trending-items.component';
import { PreviewSwiperComponent } from './components/preview-swiper/preview-swiper.component';
import { BrandsComponent } from './components/brands/brands.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

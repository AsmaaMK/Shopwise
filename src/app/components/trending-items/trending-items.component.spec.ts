import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingItemsComponent } from './trending-items.component';

describe('TrendingItemsComponent', () => {
  let component: TrendingItemsComponent;
  let fixture: ComponentFixture<TrendingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

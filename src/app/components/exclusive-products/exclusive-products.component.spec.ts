import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveProductsComponent } from './exclusive-products.component';

describe('ExclusiveProductsComponent', () => {
  let component: ExclusiveProductsComponent;
  let fixture: ComponentFixture<ExclusiveProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusiveProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusiveProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

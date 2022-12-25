import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewSwiperComponent } from './preview-swiper.component';

describe('PreviewSwiperComponent', () => {
  let component: PreviewSwiperComponent;
  let fixture: ComponentFixture<PreviewSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

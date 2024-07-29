import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselImgComponent } from './CaruselImgComponent';

describe('CaruselImgComponent', () => {
  let component: CaruselImgComponent;
  let fixture: ComponentFixture<CaruselImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaruselImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaruselImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

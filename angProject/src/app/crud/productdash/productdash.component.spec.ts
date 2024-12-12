import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdashComponent } from './productdash.component';

describe('ProductdashComponent', () => {
  let component: ProductdashComponent;
  let fixture: ComponentFixture<ProductdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductdashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

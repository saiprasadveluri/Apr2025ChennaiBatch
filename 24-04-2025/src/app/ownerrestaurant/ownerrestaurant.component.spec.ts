import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerrestaurantComponent } from './ownerrestaurant.component';

describe('OwnerrestaurantComponent', () => {
  let component: OwnerrestaurantComponent;
  let fixture: ComponentFixture<OwnerrestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerrestaurantComponent]
    });
    fixture = TestBed.createComponent(OwnerrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRestaurantComponent } from './owner-restaurant.component';

describe('OwnerRestaurantComponent', () => {
  let component: OwnerRestaurantComponent;
  let fixture: ComponentFixture<OwnerRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerRestaurantComponent]
    });
    fixture = TestBed.createComponent(OwnerRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

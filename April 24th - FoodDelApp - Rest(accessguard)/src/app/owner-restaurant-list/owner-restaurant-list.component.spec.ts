import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRestaurantListComponent } from './owner-restaurant-list.component';

describe('OwnerRestaurantListComponent', () => {
  let component: OwnerRestaurantListComponent;
  let fixture: ComponentFixture<OwnerRestaurantListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerRestaurantListComponent]
    });
    fixture = TestBed.createComponent(OwnerRestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

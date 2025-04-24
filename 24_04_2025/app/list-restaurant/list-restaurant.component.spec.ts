import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestaurantComponent } from './list-restaurant.component';

describe('ListRestaurantComponent', () => {
  let component: ListRestaurantComponent;
  let fixture: ComponentFixture<ListRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRestaurantComponent]
    });
    fixture = TestBed.createComponent(ListRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

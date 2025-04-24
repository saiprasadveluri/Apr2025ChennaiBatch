import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurantComponent } from './view-restaurant.component';

describe('ViewRestaurantComponent', () => {
  let component: ViewRestaurantComponent;
  let fixture: ComponentFixture<ViewRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRestaurantComponent]
    });
    fixture = TestBed.createComponent(ViewRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

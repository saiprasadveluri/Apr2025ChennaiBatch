import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrestaurantComponent } from './viewrestaurant.component';

describe('ViewrestaurantComponent', () => {
  let component: ViewrestaurantComponent;
  let fixture: ComponentFixture<ViewrestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewrestaurantComponent]
    });
    fixture = TestBed.createComponent(ViewrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

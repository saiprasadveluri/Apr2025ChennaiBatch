import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRestaurantListComponent } from './edit-restaurant-list.component';

describe('EditRestaurantListComponent', () => {
  let component: EditRestaurantListComponent;
  let fixture: ComponentFixture<EditRestaurantListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRestaurantListComponent]
    });
    fixture = TestBed.createComponent(EditRestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

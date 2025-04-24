import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestrauntComponent } from './add-restraunt.component';

describe('AddRestrauntComponent', () => {
  let component: AddRestrauntComponent;
  let fixture: ComponentFixture<AddRestrauntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRestrauntComponent]
    });
    fixture = TestBed.createComponent(AddRestrauntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

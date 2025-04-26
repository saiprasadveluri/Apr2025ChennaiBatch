import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewVisitorComponent } from './add-new-visitor.component';

describe('AddNewVisitorComponent', () => {
  let component: AddNewVisitorComponent;
  let fixture: ComponentFixture<AddNewVisitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewVisitorComponent]
    });
    fixture = TestBed.createComponent(AddNewVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

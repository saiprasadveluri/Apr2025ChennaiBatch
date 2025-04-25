import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvisitorComponent } from './addvisitor.component';

describe('AddvisitorComponent', () => {
  let component: AddvisitorComponent;
  let fixture: ComponentFixture<AddvisitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddvisitorComponent]
    });
    fixture = TestBed.createComponent(AddvisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

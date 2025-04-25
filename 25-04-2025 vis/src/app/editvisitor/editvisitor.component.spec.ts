import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvisitorComponent } from './editvisitor.component';

describe('EditvisitorComponent', () => {
  let component: EditvisitorComponent;
  let fixture: ComponentFixture<EditvisitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditvisitorComponent]
    });
    fixture = TestBed.createComponent(EditvisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

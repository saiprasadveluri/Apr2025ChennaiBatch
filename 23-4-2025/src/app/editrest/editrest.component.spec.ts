import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrestComponent } from './editrest.component';

describe('EditrestComponent', () => {
  let component: EditrestComponent;
  let fixture: ComponentFixture<EditrestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditrestComponent]
    });
    fixture = TestBed.createComponent(EditrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

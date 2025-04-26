import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVisitorListComponent } from './edit-visitor-list.component';

describe('EditVisitorListComponent', () => {
  let component: EditVisitorListComponent;
  let fixture: ComponentFixture<EditVisitorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditVisitorListComponent]
    });
    fixture = TestBed.createComponent(EditVisitorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

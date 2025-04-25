import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorListComponent } from './visitor-list.component';

describe('VisitorListComponent', () => {
  let component: VisitorListComponent;
  let fixture: ComponentFixture<VisitorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorListComponent]
    });
    fixture = TestBed.createComponent(VisitorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

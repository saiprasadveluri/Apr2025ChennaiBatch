import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitoeListComponent } from './visitoe-list.component';

describe('VisitoeListComponent', () => {
  let component: VisitoeListComponent;
  let fixture: ComponentFixture<VisitoeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitoeListComponent]
    });
    fixture = TestBed.createComponent(VisitoeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

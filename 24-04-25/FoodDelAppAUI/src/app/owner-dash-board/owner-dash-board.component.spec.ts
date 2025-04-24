import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDashBoardComponent } from './owner-dash-board.component';

describe('OwnerDashBoardComponent', () => {
  let component: OwnerDashBoardComponent;
  let fixture: ComponentFixture<OwnerDashBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerDashBoardComponent]
    });
    fixture = TestBed.createComponent(OwnerDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

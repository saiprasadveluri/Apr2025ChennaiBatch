import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDashBoardComponent } from './manager-dash-board.component';

describe('ManagerDashBoardComponent', () => {
  let component: ManagerDashBoardComponent;
  let fixture: ComponentFixture<ManagerDashBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerDashBoardComponent]
    });
    fixture = TestBed.createComponent(ManagerDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

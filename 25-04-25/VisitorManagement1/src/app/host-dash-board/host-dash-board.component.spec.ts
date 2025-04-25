import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostDashBoardComponent } from './host-dash-board.component';

describe('HostDashBoardComponent', () => {
  let component: HostDashBoardComponent;
  let fixture: ComponentFixture<HostDashBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostDashBoardComponent]
    });
    fixture = TestBed.createComponent(HostDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

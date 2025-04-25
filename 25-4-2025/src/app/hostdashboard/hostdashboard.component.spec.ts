import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostdashboardComponent } from './hostdashboard.component';

describe('HostdashboardComponent', () => {
  let component: HostdashboardComponent;
  let fixture: ComponentFixture<HostdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostdashboardComponent]
    });
    fixture = TestBed.createComponent(HostdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDashComponent } from './owner-dash.component';

describe('OwnerDashComponent', () => {
  let component: OwnerDashComponent;
  let fixture: ComponentFixture<OwnerDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerDashComponent]
    });
    fixture = TestBed.createComponent(OwnerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

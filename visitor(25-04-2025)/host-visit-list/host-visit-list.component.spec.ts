import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostVisitListComponent } from './host-visit-list.component';

describe('HostVisitListComponent', () => {
  let component: HostVisitListComponent;
  let fixture: ComponentFixture<HostVisitListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostVisitListComponent]
    });
    fixture = TestBed.createComponent(HostVisitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

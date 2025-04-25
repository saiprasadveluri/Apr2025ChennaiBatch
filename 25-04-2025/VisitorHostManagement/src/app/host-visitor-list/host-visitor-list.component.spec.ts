import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostVisitorListComponent } from './host-visitor-list.component';

describe('HostVisitorListComponent', () => {
  let component: HostVisitorListComponent;
  let fixture: ComponentFixture<HostVisitorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostVisitorListComponent]
    });
    fixture = TestBed.createComponent(HostVisitorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosthomeComponent } from './hosthome.component';

describe('HosthomeComponent', () => {
  let component: HosthomeComponent;
  let fixture: ComponentFixture<HosthomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HosthomeComponent]
    });
    fixture = TestBed.createComponent(HosthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

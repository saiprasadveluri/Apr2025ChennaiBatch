import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostdashComponent } from './hostdash.component';

describe('HostdashComponent', () => {
  let component: HostdashComponent;
  let fixture: ComponentFixture<HostdashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostdashComponent]
    });
    fixture = TestBed.createComponent(HostdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

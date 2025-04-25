import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistorDetailsComponent } from './vistor-details.component';

describe('VistorDetailsComponent', () => {
  let component: VistorDetailsComponent;
  let fixture: ComponentFixture<VistorDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistorDetailsComponent]
    });
    fixture = TestBed.createComponent(VistorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

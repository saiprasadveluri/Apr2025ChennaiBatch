import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApphomeComponent } from './apphome.component';

describe('ApphomeComponent', () => {
  let component: ApphomeComponent;
  let fixture: ComponentFixture<ApphomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApphomeComponent]
    });
    fixture = TestBed.createComponent(ApphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

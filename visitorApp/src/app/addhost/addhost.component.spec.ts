import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhostComponent } from './addhost.component';

describe('AddhostComponent', () => {
  let component: AddhostComponent;
  let fixture: ComponentFixture<AddhostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddhostComponent]
    });
    fixture = TestBed.createComponent(AddhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

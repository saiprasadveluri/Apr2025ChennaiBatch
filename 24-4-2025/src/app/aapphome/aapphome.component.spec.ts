import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AapphomeComponent } from './aapphome.component';

describe('AapphomeComponent', () => {
  let component: AapphomeComponent;
  let fixture: ComponentFixture<AapphomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AapphomeComponent]
    });
    fixture = TestBed.createComponent(AapphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

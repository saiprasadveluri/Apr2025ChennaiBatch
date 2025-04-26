import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorlistComponent } from './visitorlist.component';

describe('VisitorlistComponent', () => {
  let component: VisitorlistComponent;
  let fixture: ComponentFixture<VisitorlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorlistComponent]
    });
    fixture = TestBed.createComponent(VisitorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

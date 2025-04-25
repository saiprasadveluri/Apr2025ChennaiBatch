import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HvisitorListComponent } from './hvisitor-list.component';

describe('HvisitorListComponent', () => {
  let component: HvisitorListComponent;
  let fixture: ComponentFixture<HvisitorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HvisitorListComponent]
    });
    fixture = TestBed.createComponent(HvisitorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

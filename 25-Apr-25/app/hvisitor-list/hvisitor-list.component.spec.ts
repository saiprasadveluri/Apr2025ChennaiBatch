import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HVisitorListComponent } from './hvisitor-list.component';

describe('HVisitorListComponent', () => {
  let component: HVisitorListComponent;
  let fixture: ComponentFixture<HVisitorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HVisitorListComponent]
    });
    fixture = TestBed.createComponent(HVisitorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

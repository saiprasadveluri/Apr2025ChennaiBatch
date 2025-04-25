import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHostListComponent } from './view-host-list.component';

describe('ViewHostListComponent', () => {
  let component: ViewHostListComponent;
  let fixture: ComponentFixture<ViewHostListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewHostListComponent]
    });
    fixture = TestBed.createComponent(ViewHostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

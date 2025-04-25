import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostvisitorlistComponent } from './hostvisitorlist.component';

describe('HostvisitorlistComponent', () => {
  let component: HostvisitorlistComponent;
  let fixture: ComponentFixture<HostvisitorlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostvisitorlistComponent]
    });
    fixture = TestBed.createComponent(HostvisitorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

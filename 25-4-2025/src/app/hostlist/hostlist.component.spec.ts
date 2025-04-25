import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlistComponent } from './hostlist.component';

describe('HostlistComponent', () => {
  let component: HostlistComponent;
  let fixture: ComponentFixture<HostlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostlistComponent]
    });
    fixture = TestBed.createComponent(HostlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

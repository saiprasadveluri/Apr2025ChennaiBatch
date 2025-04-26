import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostVistListComponent } from './host-vist-list.component';

describe('HostVistListComponent', () => {
  let component: HostVistListComponent;
  let fixture: ComponentFixture<HostVistListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostVistListComponent]
    });
    fixture = TestBed.createComponent(HostVistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

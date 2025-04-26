import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostVisitiorListComponent } from './host-visitior-list.component';

describe('HostVisitiorListComponent', () => {
  let component: HostVisitiorListComponent;
  let fixture: ComponentFixture<HostVisitiorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostVisitiorListComponent]
    });
    fixture = TestBed.createComponent(HostVisitiorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

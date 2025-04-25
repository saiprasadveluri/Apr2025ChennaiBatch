import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRestListComponent } from './owner-rest-list.component';

describe('OwnerRestListComponent', () => {
  let component: OwnerRestListComponent;
  let fixture: ComponentFixture<OwnerRestListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerRestListComponent]
    });
    fixture = TestBed.createComponent(OwnerRestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

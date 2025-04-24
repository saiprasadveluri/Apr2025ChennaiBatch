import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerrestlistComponent } from './ownerrestlist.component';

describe('OwnerrestlistComponent', () => {
  let component: OwnerrestlistComponent;
  let fixture: ComponentFixture<OwnerrestlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerrestlistComponent]
    });
    fixture = TestBed.createComponent(OwnerrestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

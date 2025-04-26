import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHostComponent } from './add-host.component';

describe('AddHostComponent', () => {
  let component: AddHostComponent;
  let fixture: ComponentFixture<AddHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHostComponent]
    });
    fixture = TestBed.createComponent(AddHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

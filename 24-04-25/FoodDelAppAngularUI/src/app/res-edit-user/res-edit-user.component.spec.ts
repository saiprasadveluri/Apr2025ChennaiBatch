import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResEditUserComponent } from './res-edit-user.component';

describe('ResEditUserComponent', () => {
  let component: ResEditUserComponent;
  let fixture: ComponentFixture<ResEditUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResEditUserComponent]
    });
    fixture = TestBed.createComponent(ResEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerhomeComponent } from './ownerhome.component';

describe('OwnerhomeComponent', () => {
  let component: OwnerhomeComponent;
  let fixture: ComponentFixture<OwnerhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerhomeComponent]
    });
    fixture = TestBed.createComponent(OwnerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

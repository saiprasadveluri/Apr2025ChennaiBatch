import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithostComponent } from './edithost.component';

describe('EdithostComponent', () => {
  let component: EdithostComponent;
  let fixture: ComponentFixture<EdithostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdithostComponent]
    });
    fixture = TestBed.createComponent(EdithostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

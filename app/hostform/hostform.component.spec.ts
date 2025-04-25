import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostformComponent } from './hostform.component';

describe('HostformComponent', () => {
  let component: HostformComponent;
  let fixture: ComponentFixture<HostformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostformComponent]
    });
    fixture = TestBed.createComponent(HostformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownLoadManagerComponent } from './down-load-manager.component';

describe('DownLoadManagerComponent', () => {
  let component: DownLoadManagerComponent;
  let fixture: ComponentFixture<DownLoadManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownLoadManagerComponent]
    });
    fixture = TestBed.createComponent(DownLoadManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

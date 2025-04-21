import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadManagerComponent } from './download-manager.component';

describe('DownloadManagerComponent', () => {
  let component: DownloadManagerComponent;
  let fixture: ComponentFixture<DownloadManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadManagerComponent]
    });
    fixture = TestBed.createComponent(DownloadManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

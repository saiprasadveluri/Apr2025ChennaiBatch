import { TestBed } from '@angular/core/testing';

import { FileDownloaderserviceService } from './file-downloaderservice.service';

describe('FileDownloaderserviceService', () => {
  let service: FileDownloaderserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileDownloaderserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

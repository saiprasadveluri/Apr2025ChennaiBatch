import { TestBed } from '@angular/core/testing';

import { FileDownloaderServiceService } from './file-downloader-service.service';

describe('FileDownloaderServiceService', () => {
  let service: FileDownloaderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileDownloaderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

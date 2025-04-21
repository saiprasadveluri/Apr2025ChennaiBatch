import { TestBed } from '@angular/core/testing';

import { CloudDataServiceService } from './cloud-data-service.service';

describe('CloudDataServiceService', () => {
  let service: CloudDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CloudDataProviderService } from './cloud-data-provider.service';

describe('CloudDataProviderService', () => {
  let service: CloudDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

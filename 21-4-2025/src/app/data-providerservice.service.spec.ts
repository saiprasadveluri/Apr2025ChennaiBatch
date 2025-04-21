import { TestBed } from '@angular/core/testing';

import { DataProviderserviceService } from './data-providerservice.service';

describe('DataProviderserviceService', () => {
  let service: DataProviderserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProviderserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

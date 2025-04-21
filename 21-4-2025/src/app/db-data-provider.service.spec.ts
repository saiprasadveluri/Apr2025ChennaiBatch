import { TestBed } from '@angular/core/testing';

import { DBDataProviderService } from './db-data-provider.service';

describe('DBDataProviderService', () => {
  let service: DBDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DBDataProviderService } from './dbdata-provider.service';

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

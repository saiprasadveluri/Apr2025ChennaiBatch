import { TestBed } from '@angular/core/testing';

import { RDataSourceService } from './rdata-source.service';

describe('RDataSourceService', () => {
  let service: RDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

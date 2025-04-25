import { TestBed } from '@angular/core/testing';

import { VDataSourceService } from './vdata-source.service';

describe('VDataSourceService', () => {
  let service: VDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

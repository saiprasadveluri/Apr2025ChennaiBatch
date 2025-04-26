import { TestBed } from '@angular/core/testing';

import { DatasourceServiceService } from './datasource-service.service';

describe('DatasourceServiceService', () => {
  let service: DatasourceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasourceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
